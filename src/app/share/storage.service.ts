import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StorageService {
    constructor(private http: Http) {}
}
