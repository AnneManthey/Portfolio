import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';

import { References } from './references';

describe('References', () => {
  let component: References;
  let fixture: ComponentFixture<References>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [References],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(References);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link each reference author to their GitHub profile in a new tab', () => {
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll(
      'a.references-github'
    ) as NodeListOf<HTMLAnchorElement>;

    expect(Array.from(links, link => link.href)).toEqual([
      'https://github.com/maikmuc80',
      'https://github.com/kristinastarovoit',
      'https://github.com/Xargall',
    ]);
    expect(Array.from(links, link => link.target)).toEqual([
      '_blank',
      '_blank',
      '_blank',
    ]);
    expect(Array.from(links, link => link.rel)).toEqual([
      'noopener noreferrer',
      'noopener noreferrer',
      'noopener noreferrer',
    ]);
  });

});
