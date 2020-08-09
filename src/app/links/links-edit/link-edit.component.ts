import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { LinksService } from '../links.service';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.css']
})
export class LinkEditComponent implements OnInit {
  id: number;
  editMode = false;
  linkForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private linkService: LinksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.linkService.updateLink(this.id, this.linkForm.value);
    } else {
      this.linkService.addLink(this.linkForm.value);
    }
    this.onCancel();
  }

  onAddTag() {
    (this.linkForm.get('tags') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteTag(index: number) {
    (this.linkForm.get('tags') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    const linkName = '';
    const linkTags = new FormArray([]);

    // if (this.editMode) {
    // }

    this.linkForm = new FormGroup({
      url: new FormControl(linkName, Validators.required),
      tags: linkTags
    });
  }
}
