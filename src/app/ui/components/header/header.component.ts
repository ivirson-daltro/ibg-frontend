import { Component, computed, inject, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs';

function deepestSnapshotData(route: ActivatedRoute) {
  let r: ActivatedRoute | null = route;
  while (r?.firstChild) r = r.firstChild;
  return r?.snapshot.data ?? {};
}

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  openSidenavEmitter = output<void>();

  private deepestData$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    startWith(null),
    map(() => deepestSnapshotData(this.route))
  );

  data = toSignal(this.deepestData$, {
    initialValue: deepestSnapshotData(this.route),
  });

  title = computed(() => this.data()['title'] ?? '');
  backTo = computed(() => this.data()['backTo'] ?? undefined);
  showMenu = computed(() => this.data()['showMenu'] ?? false);

  openSidenav() {
    this.openSidenavEmitter.emit();
  }
}
