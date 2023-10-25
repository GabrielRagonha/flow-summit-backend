export class Environment {
  public static port: string = process.env.PORT ?? '3000';
  public static jwt_secret: string = process.env.JWT_SECRET ?? 'secret';
}
