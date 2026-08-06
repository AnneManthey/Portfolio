import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Input, OnDestroy, inject, output, viewChild } from '@angular/core';
import { ProjectInterface } from '../../../../shared/interfaces/project-interface';
import {
    TranslateService,
    TranslatePipe,
} from "@ngx-translate/core";

@Component({
  selector: 'app-project-dialog',
  imports: [TranslatePipe],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})

/**
 * Dialog component for displaying detailed project information.
 */
export class ProjectDialog {
  private translate = inject(TranslateService);

  /** Project data passed into the dialog. */
  @Input() projectList: ProjectInterface | null = null;

  /** Reference to the native dialog element. */
  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  /** Emits when the dialog is closed with a confirmation state. */
  readonly closed = output<boolean>();

  /** Emits when the user requests the next project. */
  readonly nextProjectRequested = output<void>();
  private readonly document = inject(DOCUMENT);
  private previousBodyOverflow = '';
  private previousHtmlOverflow = '';

  /**
   * Opens the dialog and disables background scrolling.
   */
  open(): void {
    this.lockBackgroundScroll();
    this.dialogRef().nativeElement.showModal();
  }

  /**
   * Closes the dialog and emits the confirmation result.
   * @param confirmed Indicates whether the action was confirmed.
   */
  close(confirmed: boolean): void {
    this.dialogRef().nativeElement.close();
    this.unlockBackgroundScroll();
    this.closed.emit(confirmed);
  }

  /**
   * Cancels the dialog and emits a false confirmation state.
   */
  onCancel(): void {
    this.unlockBackgroundScroll();
    this.closed.emit(false);
  }

  /**
   * Requests the next project to be displayed.
   */
  showNextProject(): void {
    this.nextProjectRequested.emit();
  }

  /**
   * Restores the page scroll behavior when the component is destroyed.
   */
  ngOnDestroy(): void {
    this.unlockBackgroundScroll();
  }

  /**
   * Disables page scrolling while the dialog is open.
   */
  private lockBackgroundScroll(): void {
    const html = this.document.documentElement;
    const body = this.document.body;
    this.previousHtmlOverflow = html.style.overflow;
    this.previousBodyOverflow = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
  }

  /**
   * Restores the previous page scrolling behavior.
   */
  private unlockBackgroundScroll(): void {
    const html = this.document.documentElement;
    const body = this.document.body;
    html.style.overflow = this.previousHtmlOverflow;
    body.style.overflow = this.previousBodyOverflow;
  }

}
