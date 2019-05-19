import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusComponent, ContactComponent, DownloadsComponent, FacilitiesComponent, EventsComponent,
  GalleryComponent, JobsComponent, PartnersComponent, MentorsComponent, ServicesComponent, HomeComponent  } from './';

const routes: Routes = [
  { path: "about", component: AboutusComponent },
  { path: "contact", component: ContactComponent },
  { path: "downloads", component: DownloadsComponent },
  { path: "events", component: EventsComponent },
  { path: "facilities", component: FacilitiesComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "jobs", component: JobsComponent },
  { path: "team", component: MentorsComponent },
  { path: "partners", component: PartnersComponent },
  { path: "services", component: ServicesComponent },
  { path: "home", component: HomeComponent},
  { path: "", redirectTo:"home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
