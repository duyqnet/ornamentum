import { Component, OnDestroy, OnInit } from '@angular/core';

import { GlobalRefService, DataTableWebsocketDataFetchService, DataTableDataBindCallback } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

/**
 * Server side real time data binding example component.
 */
@Component({
  selector: 'app-server-side-real-time-data-binding-usage',
  templateUrl: './server-side-real-time-data-binding-usage.component.html'
})
export class ServerSideRealTimeDataBindingUsageComponent implements OnInit, OnDestroy {
  public onDataBind: DataTableDataBindCallback;

  constructor(private dataFetchService: DataFetchService,
              private globalRefService: GlobalRefService,
              private dataTableWebSocketDataFetchService: DataTableWebsocketDataFetchService<ExampleData>) {
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create websocket connection on browser environment only to support server side rendering.
    if (this.globalRefService.isBrowser) {
      this.dataTableWebSocketDataFetchService.init({
        url: `wss://${window.location.hostname}` // websocket endpoint
      });

      this.onDataBind = this.dataTableWebSocketDataFetchService.onDataBind();
    }
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.dataTableWebSocketDataFetchService.dispose();
  }
}