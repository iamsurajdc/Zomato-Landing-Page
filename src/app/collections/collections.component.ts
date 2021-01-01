import { AppserviceService } from './../appservice.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  cityId: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppserviceService
  ) {}
  collections: any = [];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.cityId = params?.['params'].cityId;
      console.log(`this.cityId`, params?.['params'].cityId);
    });
    this.getCollections();
  }

  async getCollections() {
    this.appService
      .getCollections(this.cityId)
      .subscribe((collections: any) => {
        console.log('TCL: collections', collections.collections);
        this.collections = collections.collections;
      });

    // this.collections = this.appService.getCollections(this.cityId);
  }
}
