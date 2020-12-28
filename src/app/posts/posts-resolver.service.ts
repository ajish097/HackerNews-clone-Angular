import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Item } from "../app.model";
import { AppService } from "../app.service";

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<Item> {
    constructor(private appService: AppService) { }

    resolve(
        route: ActivatedRouteSnapshot
    ): Observable<any> | Promise<any> | any {
        let Id = route.paramMap.get('id')
        return this.appService.getPosts(parseInt(Id));
    }
}