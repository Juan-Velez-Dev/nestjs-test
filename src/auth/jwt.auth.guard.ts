import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //* Aqui ingresamos logica con el can active podemos validar si tiene un rol especifico si tiene permisos etc
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {}
}
