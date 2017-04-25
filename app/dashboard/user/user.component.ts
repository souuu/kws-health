import { Component,state,style,animate,transition, trigger, keyframes } from '@angular/core';
import {BusinessService} from "../../core/business.service";
import {Patient} from "../../shared/patient.model";
import {Result} from "../../shared/results.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css'],
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
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

    export class UserComponent{
    patients_toshow = [{
        id : "",
        patientId : "",
        fName:"",
        title :"",
        lName :"",
        dob :"",
        gender:"",
        bloodtype:"",
        stats:{
            bp: 0,
            hr: 0,
            rr: 0,
            spo2: 0,
            temp: 0,
            time: "",
            prediction: 0,
            meta_ID: ""
        }
    }] ;



    patients : Patient[] ;
    results : Result [];


    constructor(private businessService:BusinessService,private router:Router, private route:ActivatedRoute) {

    }

    goToUser(id:number){
        this.router.navigate(['/user/' + id]);
    }


    ngOnInit() {
        let root=this ;
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
                                /*for (let patient of this.patients) {
                                 this.patients[index].stats=[] ;
                                 for (let result of this.results) {
                                 if ((result.patientId)==(patient.patientId)) {
                                 this.patients.find(x=> (x.patientId == patient.patientId )).stats.push(result) ;
                                 }
                                 }
                                 index++ ;

                                 }*/
                                console.log(this.patients);
                                let index2 =0 ;
                                for (let patient of this.patients) {
                                    let x = {
                                        id : patient.id,
                                        patientId : patient.patientId,
                                        fName:patient.fName,
                                        title :patient.title,
                                        lName :patient.lName,
                                        dob :patient.dob,
                                        gender:patient.gender,
                                        bloodtype:patient.bloodtype,
                                        stats:{
                                            bp: 0,
                                            hr: 0,
                                            rr: 0,
                                            spo2: 0,
                                            temp: 0,
                                            time: "",
                                            prediction: 0,
                                            meta_ID: ""
                                        }
                                    } ;
                                    this.patients_toshow[index2]=x ;
                                    index2++ ;
                                }
                                /*for(let j=0;j<4;j++) {
                                    for (let i = 0; i < 60; i++) {
                                        console.log(this.patients[j].stats[i].prediction);
                                    }
                                }*/
                                index2=0 ;
                                for (let i = 0; i < this.patients[0].stats.length; i++) {
                                    for (let j=0 ; j<this.patients_toshow.length;j++) {
                                         setTimeout(function(i) {
                                             root.patients_toshow[j].stats.hr = root.patients[j].stats[i].hr;
                                             root.patients_toshow[j].stats.bp = root.patients[j].stats[i].bp;
                                             root.patients_toshow[j].stats.rr = root.patients[j].stats[i].rr;
                                             root.patients_toshow[j].stats.spo2 = root.patients[j].stats[i].spo2;
                                             root.patients_toshow[j].stats.temp = root.patients[j].stats[i].temp;
                                             root.patients_toshow[j].stats.time = root.patients[j].stats[i].time;
                                             root.patients_toshow[j].stats.prediction = root.patients[j].stats[i].prediction;
                                             root.patients_toshow[j].stats.meta_ID = root.patients[j].stats[i].meta_ID;
                                         },1000 * i,i);
                                    }
                                }

                            }
                        ) ;
                    /* for (let i = 1; i <= this.patients[0].stats.length; i++) {
                     (function(index) {
                     setTimeout(function() {

                     /!*for (let j=0;j<4;j++) {
                     this.patients2[j].stats = this.patients[j].stats[i] ;
                     };*!/


                     }, i * 1000);
                     })(i);
                     }*/


                    /*for(let i=0; i<60; i++) {
                     for(let j=0;j<4;j++) {
                     root.patients2[j].stats.hr = root.patients[j].stats[i].hr;
                     root.patients2[j].stats.bp = root.patients[j].stats[i].bp;
                     root.patients2[j].stats.spo2 = root.patients[j].stats[i].spo2;
                     root.patients2[j].stats.temp = root.patients[j].stats[i].temp;
                     root.patients2[j].stats.time = root.patients[j].stats[i].time;
                     root.patients2[j].stats.prediction = root.patients[j].stats[i].prediction;
                     root.patients2[j].stats.meta_ID = root.patients[j].stats[i].meta_ID;
                     }
                     /!* setTimeout(function(i) {
                     console.log(root.patients2);
                     },2000 * i,i);*!/


                     //1000 ms is 1 sec, here I have give 0.5 seconds as a delay.
                     }*/

                }
            ) ;


    }
}
