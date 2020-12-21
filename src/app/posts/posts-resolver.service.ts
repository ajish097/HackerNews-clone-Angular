import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Item } from "../app.model";
import { AppService } from "../app.service";

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<Item> {
    constructor(private appService: AppService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        //route.paramMap.get('id')
        return this.appService.getPosts();
    }
}