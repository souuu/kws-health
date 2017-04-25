/**
 * Created by Vyndee on 23/04/2017.
 */
import {Result} from "./results.model" ;

export interface Patient {
    id?: string;
    patientId?: string;
    title?: string;
    lName?: string;
    fName?: string;
    dob?: string;
    gender?: string;
    bloodtype?: string;
    stats?: Result[] ;
}