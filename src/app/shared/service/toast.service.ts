import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private readonly toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (element) => {
      element.addEventListener('mouseenter', Swal.stopTimer);
      element.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  open(message: string, icon: SweetAlertIcon): void {
    this.toast.fire({
      icon: icon,
      title: message
    });
  }
}
