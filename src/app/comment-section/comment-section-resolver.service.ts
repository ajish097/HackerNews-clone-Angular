import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Item } from "../app.model";
import { AppService } from "../app.service";

@Injectable({ providedIn: 'root' })
export class 
CommentSectionResolver implements Resolve<Item> {
    
    constructor(private appService: AppService) { }

    resolve(
        route: ActivatedRouteSnapshot
    ): Observable<any> | Promise<any> | any {
        
        return this.appService.getComments(parseInt(route.paramMap.get('id')));
    }
}