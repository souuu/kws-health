"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var business_service_1 = require("../../core/business.service");
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(businessService, router, route) {
        this.businessService = businessService;
        this.router = router;
        this.route = route;
        this.patients_toshow = [{
                id: "",
                patientId: "",
                fName: "",
                title: "",
                lName: "",
                dob: "",
                gender: "",
                bloodtype: "",
                stats: {
                    bp: 0,
                    hr: 0,
                    rr: 0,
                    spo2: 0,
                    temp: 0,
                    time: "",
                    prediction: 0,
                    meta_ID: ""
                }
            }];
    }
    UserComponent.prototype.goToUser = function (id) {
        this.router.navigate(['/user/' + id]);
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var root = this;
        this.businessService.getPatients()
            .then(function (data) {
            _this.patients = data;
            _this.businessService.getResults()
                .then(function (data2) {
                _this.results = data2;
                var index = 0;
                var _loop_1 = function (patient) {
                    _this.patients[index].stats = [];
                    for (var _i = 0, _a = _this.results; _i < _a.length; _i++) {
                        var result = _a[_i];
                        if ((result.patientId) == (patient.patientId)) {
                            _this.patients.find(function (x) { return (x.patientId == patient.patientId); }).stats.push(result);
                        }
                    }
                    index++;
                };
                for (var _i = 0, _a = _this.patients; _i < _a.length; _i++) {
                    var patient = _a[_i];
                    _loop_1(patient);
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
                console.log(_this.patients);
                var index2 = 0;
                for (var _b = 0, _c = _this.patients; _b < _c.length; _b++) {
                    var patient = _c[_b];
                    var x = {
                        id: patient.id,
                        patientId: patient.patientId,
                        fName: patient.fName,
                        title: patient.title,
                        lName: patient.lName,
                        dob: patient.dob,
                        gender: patient.gender,
                        bloodtype: patient.bloodtype,
                        stats: {
                            bp: 0,
                            hr: 0,
                            rr: 0,
                            spo2: 0,
                            temp: 0,
                            time: "",
                            prediction: 0,
                            meta_ID: ""
                        }
                    };
                    _this.patients_toshow[index2] = x;
                    index2++;
                }
                /*for(let j=0;j<4;j++) {
                    for (let i = 0; i < 60; i++) {
                        console.log(this.patients[j].stats[i].prediction);
                    }
                }*/
                index2 = 0;
                for (var i = 0; i < _this.patients[0].stats.length; i++) {
                    var _loop_2 = function (j) {
                        setTimeout(function (i) {
                            root.patients_toshow[j].stats.hr = root.patients[j].stats[i].hr;
                            root.patients_toshow[j].stats.bp = root.patients[j].stats[i].bp;
                            root.patients_toshow[j].stats.rr = root.patients[j].stats[i].rr;
                            root.patients_toshow[j].stats.spo2 = root.patients[j].stats[i].spo2;
                            root.patients_toshow[j].stats.temp = root.patients[j].stats[i].temp;
                            root.patients_toshow[j].stats.time = root.patients[j].stats[i].time;
                            root.patients_toshow[j].stats.prediction = root.patients[j].stats[i].prediction;
                            root.patients_toshow[j].stats.meta_ID = root.patients[j].stats[i].meta_ID;
                        }, 1000 * i, i);
                    };
                    for (var j = 0; j < _this.patients_toshow.length; j++) {
                        _loop_2(j);
                    }
                }
            });
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
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-cmp',
        templateUrl: 'user.component.html',
        styleUrls: ['./user.component.css'],
        animations: [
            core_1.trigger('carduserprofile', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0s ease-out'),
                ])
            ]),
            core_1.trigger('cardprofile', [
                core_1.state('*', core_1.style({
                    '-ms-transform': 'translate3D(0px, 0px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                    '-moz-transform': 'translate3D(0px, 0px, 0px)',
                    '-o-transform': 'translate3D(0px, 0px, 0px)',
                    transform: 'translate3D(0px, 0px, 0px)',
                    opacity: 1
                })),
                core_1.transition('void => *', [
                    core_1.style({ opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform': 'translate3D(0px, 150px, 0px)',
                        transform: 'translate3D(0px, 150px, 0px)',
                    }),
                    core_1.animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [business_service_1.BusinessService, router_1.Router, router_1.ActivatedRoute])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map