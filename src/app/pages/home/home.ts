import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

/**
 * Landing del Festival Rebobina.
 * Por ahora solo muestra el póster oficial: versión vertical en móvil
 * y versión horizontal en escritorio, resueltas por <picture>.
 */
@Component({
  selector: 'rb-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  /** Rutas del póster. Cambiar aquí cuando se actualice el arte. */
  protected readonly poster = {
    mobile: 'img/poster-mobile.jpg',
    desktop: 'img/poster-desktop.jpg',
    alt: 'Festival Rebobina, edición 2027 · Cinco décadas, infinitos recuerdos, un solo lugar · 3 y 4 de abril 2027 · Campo Marte, Ciudad de México',
  } as const;

  /** Se activa al cargar la imagen para el fade-in. */
  protected readonly loaded = signal(false);

  protected onLoad(): void {
    this.loaded.set(true);
  }
}
