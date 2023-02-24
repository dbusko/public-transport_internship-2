import {Injectable} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, NavigationEnd, Params} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NavigateService {
    params: {} | null = null;
    currentUrl: string | null = null;
    constructor(protected route: ActivatedRoute, protected router: Router) {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.currentUrl = this.router.url;

                this.route.queryParams.subscribe((params) => {
                    this.params = {...NavigateService.findAllRouteParams(this.route.root.snapshot), ...params};
                });
            });

        this.route.queryParams.subscribe((params) => {
            this.params = {...NavigateService.findAllRouteParams(this.route.root.snapshot), ...params};
        });
    }

    private static findAllRouteParams(route: ActivatedRouteSnapshot) {
        let params = {};

        if (route.params) {
            params = {...params, ...route.params};
        }

        if (route.data) {
            params = {...params, ...route.data};
        }

        if (route.children && Array.isArray(route.children)) {
            for (const i in route.children) {
                if (!route.children.hasOwnProperty(i)) {
                    continue;
                }

                params = {...params, ...NavigateService.findAllRouteParams(route.children[i])};
            }
        }

        return params;
    }

    public toNotFound() {
        this.router.navigate(['not-found']);
    }
    public toStart(lang?: string, brandId?: number) {
        this.toPath([]);
    }

    public toPath(path: Array<number | string> = []) {

        this.router.navigate(
            ['/'].concat(
                path.map(item => item.toString())
            )
        );
    }

}
