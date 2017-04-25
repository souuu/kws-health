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
var router_1 = require("@angular/router");
var business_service_1 = require("../../core/business.service");
var TypographyComponent = (function () {
    function TypographyComponent(router, route, businessService) {
        this.router = router;
        this.route = route;
        this.businessService = businessService;
        /* patient_toshow :Patient ;*/
        this.patient_toshow = {
            id: "",
            patientId: "",
            fName: "",
            title: "",
            lName: "",
            dob: "",
            gender: "",
            bloodtype: "",
            stats: [{
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
        this.statistique = {
            bp: 0,
            hr: 0,
            rr: 0,
            spo2: 0,
            temp: 0,
            time: "",
            prediction: 0,
            meta_ID: ""
        };
    }
    TypographyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.businessService.getPatients()
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
                    _this.patient_tosearch = _this.patients.find(function (x) { return (x.patientId == params["user-id"]); });
                    _this.patient_toshow.id = _this.patient_tosearch.id;
                    _this.patient_toshow.patientId = _this.patient_tosearch.patientId;
                    _this.patient_toshow.title = _this.patient_tosearch.title;
                    _this.patient_toshow.fName = _this.patient_tosearch.fName;
                    _this.patient_toshow.lName = _this.patient_tosearch.lName;
                    _this.patient_toshow.dob = _this.patient_tosearch.dob;
                    _this.patient_toshow.bloodtype = _this.patient_tosearch.bloodtype;
                    var index2 = 0;
                    for (var _b = 0, _c = _this.patient_tosearch.stats; _b < _c.length; _b++) {
                        var stat = _c[_b];
                        _this.statistique.hr = stat.hr;
                        _this.statistique.bp = stat.bp;
                        _this.statistique.rr = stat.rr;
                        _this.statistique.spo2 = stat.spo2;
                        _this.statistique.temp = stat.temp;
                        _this.statistique.time = stat.time;
                        _this.statistique.prediction = stat.prediction;
                        _this.statistique.meta_ID = stat.meta_ID;
                        _this.patient_toshow.stats.push(_this.statistique);
                        index2++;
                    }
                    _this.patient_toshow.stats.splice(0, 1);
                    console.log(_this.patient_toshow);
                });
            });
        });
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'typography-cmp',
        templateUrl: 'typography.component.html',
        animations: [
            core_1.trigger('cardtable1', [
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
                    core_1.animate('0.3s 0s ease-out')
                ])
            ]),
            core_1.trigger('cardtable2', [
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
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, business_service_1.BusinessService])
], TypographyComponent);
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map