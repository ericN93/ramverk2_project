import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ServerService } from './_services/server.service'

import { AppRoutes } from './app.routes';
import { MaterialModule } from './material.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FirstComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(AppRoutes)
    ],
     providers: [ServerService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
