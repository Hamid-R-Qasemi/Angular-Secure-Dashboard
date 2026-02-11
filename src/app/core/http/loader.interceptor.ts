import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { loading } from '../ui/loader.store';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  loading.set(true);

  return next(req).pipe(finalize(() => loading.set(false)));
};
