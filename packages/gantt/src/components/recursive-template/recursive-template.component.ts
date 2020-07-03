import { Component, OnInit, ContentChild, Input, TemplateRef, TrackByFunction } from '@angular/core';

@Component({
    selector: '[ngxRecursiveForOf]',
    templateUrl: './recursive-template.component.html'
})
export class RecursiveTemplateComponent<T> implements OnInit {
    @Input('ngxRecursiveForOf') data: T[];

    @Input('ngxChildrenResolve') childrenResolve: (item: T) => T[];

    @Input('ngxTrackBy') trackBy: TrackByFunction<T>;

    @ContentChild('itemTemplate', { static: false }) template: TemplateRef<any>;

    constructor() {}

    ngOnInit() {}
}
