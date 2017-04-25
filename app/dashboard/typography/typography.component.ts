import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Patient} from "../../shared/patient.model";
import {Result} from "../../shared/results.model";
import {BusinessService} from "../../core/business.service";

@Component({
    moduleId: module.id,
    selector: 'typography-cmp',
    templateUrl: 'typography.component.html',
    animations: [
        trigger('cardtable1', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out')
            ])
        ]),
        trigger('cardtable2', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0.25s ease-out')
            ])
        ])
    ]
})

export class TypographyComponent{
    patients : Patient[] ;
    results : Result [];
   /* patient_toshow :Patient ;*/
    patient_toshow = {
        id : "",
        patientId : "",
        fName:"",
        title :"",
        lName :"",
        dob :"",
        gender:"",
        bloodtype:"",
        stats:[{
            bp: 0,
            hr: 0,
            rr: 0,
            spo2: 0,
            temp: 0,
            time: "",
            prediction: 0,
            meta_ID: ""
        }]
    };

    statistique = {
        bp: 0,
        hr: 0,
        rr: 0,
        spo2: 0,
        temp: 0,
        time: "",
        prediction: 0,
        meta_ID: ""
    };
    patient_tosearch : Patient ;


    constructor(private router:Router, private route:ActivatedRoute,private businessService:BusinessService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.businessService.getPatients()
                .then(
                    data => {
                        this.patients = data ;
                        this.businessService.getResults()
                            .then(
                                data2 => {
                                    this.results = data2 ;
                                    let index = 0 ;
                                    for (let patient of this.patients) {
                                        this.patients[index].stats=[] ;
                                        for (let result of this.results) {
                                            if ((result.patientId)==(patient.patientId)) {
                                                this.patients.find(x=> (x.patientId == patient.patientId )).stats.push(result) ;
                                            }
                                        }
                                        index++ ;
                                    }
                                    this.patient_tosearch=this.patients.find(x=> (x.patientId == params["user-id"] )) ;
                                    this.patient_toshow.id=this.patient_tosearch.id ;
                                    this.patient_toshow.patientId=this.patient_tosearch.patientId ;
                                    this.patient_toshow.title=this.patient_tosearch.title ;
                                    this.patient_toshow.fName=this.patient_tosearch.fName ;
                                    this.patient_toshow.lName=this.patient_tosearch.lName ;
                                    this.patient_toshow.dob=this.patient_tosearch.dob ;
                                    this.patient_toshow.bloodtype=this.patient_tosearch.bloodtype ;
                                    let index2=0 ;
                                    for (let stat of this.patient_tosearch.stats) {
                                        this.statistique.hr=stat.hr ;
                                        this.statistique.bp=stat.bp ;
                                        this.statistique.rr=stat.rr ;
                                        this.statistique.spo2=stat.spo2 ;
                                        this.statistique.temp=stat.temp ;
                                        this.statistique.time=stat.time ;
                                        this.statistique.prediction=stat.prediction ;
                                        this.statistique.meta_ID=stat.meta_ID ;
                                        this.patient_toshow.stats.push(this.statistique);
                                        index2++ ;
                                    }
                                    this.patient_toshow.stats.splice(0,1);
                                    console.log(this.patient_toshow) ;

        }) ;
    });
}) ;
    }
}
