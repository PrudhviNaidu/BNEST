import { Component } from "@angular/core";
import { Directive, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "BIONEST";

  @HostListener("window:scroll", ["$event"])
  scrollHandler(event) {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var scrolled1 = (winScroll / 180) * 100;
    var scrolled2 = (winScroll / 200) * 100;
    var scrolled3 = (winScroll / 230) * 100;
    var scrolled4 = (winScroll / 15000) * 100;

    document.getElementById("progress-container1").style.left = scrolled1 + "px";
    document.getElementById("progress-container2").style.left = scrolled2 + "px";
    document.getElementById("progress-container3").style.left = scrolled3 + "px";
    document.getElementById("more").style.top = 25 + scrolled4 + "vh";
  }
}
