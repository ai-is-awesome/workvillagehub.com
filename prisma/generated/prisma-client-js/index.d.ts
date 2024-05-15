
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Continent
 * 
 */
export type Continent = $Result.DefaultSelection<Prisma.$ContinentPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserStatistics
 * 
 */
export type UserStatistics = $Result.DefaultSelection<Prisma.$UserStatisticsPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Technology
 * 
 */
export type Technology = $Result.DefaultSelection<Prisma.$TechnologyPayload>
/**
 * Model JobTechnologies
 * 
 */
export type JobTechnologies = $Result.DefaultSelection<Prisma.$JobTechnologiesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jobs
 * const jobs = await prisma.job.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.continent`: Exposes CRUD operations for the **Continent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Continents
    * const continents = await prisma.continent.findMany()
    * ```
    */
  get continent(): Prisma.ContinentDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.userStatistics`: Exposes CRUD operations for the **UserStatistics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStatistics
    * const userStatistics = await prisma.userStatistics.findMany()
    * ```
    */
  get userStatistics(): Prisma.UserStatisticsDelegate<ExtArgs>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs>;

  /**
   * `prisma.technology`: Exposes CRUD operations for the **Technology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technologies
    * const technologies = await prisma.technology.findMany()
    * ```
    */
  get technology(): Prisma.TechnologyDelegate<ExtArgs>;

  /**
   * `prisma.jobTechnologies`: Exposes CRUD operations for the **JobTechnologies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobTechnologies
    * const jobTechnologies = await prisma.jobTechnologies.findMany()
    * ```
    */
  get jobTechnologies(): Prisma.JobTechnologiesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Job: 'Job',
    Company: 'Company',
    Country: 'Country',
    Continent: 'Continent',
    City: 'City',
    Location: 'Location',
    User: 'User',
    Role: 'Role',
    UserStatistics: 'UserStatistics',
    Application: 'Application',
    Experience: 'Experience',
    Technology: 'Technology',
    JobTechnologies: 'JobTechnologies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'job' | 'company' | 'country' | 'continent' | 'city' | 'location' | 'user' | 'role' | 'userStatistics' | 'application' | 'experience' | 'technology' | 'jobTechnologies'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>,
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>,
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Continent: {
        payload: Prisma.$ContinentPayload<ExtArgs>
        fields: Prisma.ContinentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContinentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContinentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>
          }
          findFirst: {
            args: Prisma.ContinentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContinentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>
          }
          findMany: {
            args: Prisma.ContinentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>[]
          }
          create: {
            args: Prisma.ContinentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>
          }
          createMany: {
            args: Prisma.ContinentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContinentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>
          }
          update: {
            args: Prisma.ContinentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>
          }
          deleteMany: {
            args: Prisma.ContinentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContinentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContinentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContinentPayload>
          }
          aggregate: {
            args: Prisma.ContinentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContinent>
          }
          groupBy: {
            args: Prisma.ContinentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContinentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContinentCountArgs<ExtArgs>,
            result: $Utils.Optional<ContinentCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>,
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>,
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserStatistics: {
        payload: Prisma.$UserStatisticsPayload<ExtArgs>
        fields: Prisma.UserStatisticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatisticsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatisticsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>
          }
          findFirst: {
            args: Prisma.UserStatisticsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatisticsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>
          }
          findMany: {
            args: Prisma.UserStatisticsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>[]
          }
          create: {
            args: Prisma.UserStatisticsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>
          }
          createMany: {
            args: Prisma.UserStatisticsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserStatisticsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>
          }
          update: {
            args: Prisma.UserStatisticsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatisticsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatisticsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserStatisticsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserStatisticsPayload>
          }
          aggregate: {
            args: Prisma.UserStatisticsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserStatistics>
          }
          groupBy: {
            args: Prisma.UserStatisticsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserStatisticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatisticsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserStatisticsCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>,
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Technology: {
        payload: Prisma.$TechnologyPayload<ExtArgs>
        fields: Prisma.TechnologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnologyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnologyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          findFirst: {
            args: Prisma.TechnologyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnologyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          findMany: {
            args: Prisma.TechnologyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>[]
          }
          create: {
            args: Prisma.TechnologyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          createMany: {
            args: Prisma.TechnologyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TechnologyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          update: {
            args: Prisma.TechnologyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          deleteMany: {
            args: Prisma.TechnologyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TechnologyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TechnologyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TechnologyPayload>
          }
          aggregate: {
            args: Prisma.TechnologyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTechnology>
          }
          groupBy: {
            args: Prisma.TechnologyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TechnologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnologyCountArgs<ExtArgs>,
            result: $Utils.Optional<TechnologyCountAggregateOutputType> | number
          }
        }
      }
      JobTechnologies: {
        payload: Prisma.$JobTechnologiesPayload<ExtArgs>
        fields: Prisma.JobTechnologiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobTechnologiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobTechnologiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>
          }
          findFirst: {
            args: Prisma.JobTechnologiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobTechnologiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>
          }
          findMany: {
            args: Prisma.JobTechnologiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>[]
          }
          create: {
            args: Prisma.JobTechnologiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>
          }
          createMany: {
            args: Prisma.JobTechnologiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobTechnologiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>
          }
          update: {
            args: Prisma.JobTechnologiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>
          }
          deleteMany: {
            args: Prisma.JobTechnologiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobTechnologiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobTechnologiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobTechnologiesPayload>
          }
          aggregate: {
            args: Prisma.JobTechnologiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobTechnologies>
          }
          groupBy: {
            args: Prisma.JobTechnologiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobTechnologiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobTechnologiesCountArgs<ExtArgs>,
            result: $Utils.Optional<JobTechnologiesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    technologies: number
    applications: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technologies?: boolean | JobCountOutputTypeCountTechnologiesArgs
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTechnologiesWhereInput
  }


  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }



  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    Job: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Job?: boolean | CompanyCountOutputTypeCountJobArgs
  }

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }



  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    Location: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | CountryCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }



  /**
   * Count Type ContinentCountOutputType
   */

  export type ContinentCountOutputType = {
    Location: number
  }

  export type ContinentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | ContinentCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes

  /**
   * ContinentCountOutputType without action
   */
  export type ContinentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContinentCountOutputType
     */
    select?: ContinentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ContinentCountOutputType without action
   */
  export type ContinentCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }



  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    Location: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | CityCountOutputTypeCountLocationArgs
  }

  // Custom InputTypes

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }



  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    job: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | LocationCountOutputTypeCountJobArgs
  }

  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }



  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    User: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type UserStatisticsCountOutputType
   */

  export type UserStatisticsCountOutputType = {
    User: number
  }

  export type UserStatisticsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserStatisticsCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * UserStatisticsCountOutputType without action
   */
  export type UserStatisticsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatisticsCountOutputType
     */
    select?: UserStatisticsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserStatisticsCountOutputType without action
   */
  export type UserStatisticsCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type TechnologyCountOutputType
   */

  export type TechnologyCountOutputType = {
    jobTechnologies: number
    User: number
  }

  export type TechnologyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTechnologies?: boolean | TechnologyCountOutputTypeCountJobTechnologiesArgs
    User?: boolean | TechnologyCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * TechnologyCountOutputType without action
   */
  export type TechnologyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnologyCountOutputType
     */
    select?: TechnologyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TechnologyCountOutputType without action
   */
  export type TechnologyCountOutputTypeCountJobTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTechnologiesWhereInput
  }


  /**
   * TechnologyCountOutputType without action
   */
  export type TechnologyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    numberOfDetailedClicks: number | null
    numberOfTimesJobLinkIsClicked: number | null
    locationId: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    numberOfDetailedClicks: number | null
    numberOfTimesJobLinkIsClicked: number | null
    locationId: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    jobTitle: string | null
    jobLink: string | null
    companyId: number | null
    jobDescription: string | null
    jobPostDate: Date | null
    jobAddedDate: Date | null
    numberOfDetailedClicks: number | null
    numberOfTimesJobLinkIsClicked: number | null
    locationId: number | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    jobTitle: string | null
    jobLink: string | null
    companyId: number | null
    jobDescription: string | null
    jobPostDate: Date | null
    jobAddedDate: Date | null
    numberOfDetailedClicks: number | null
    numberOfTimesJobLinkIsClicked: number | null
    locationId: number | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    jobTitle: number
    jobLink: number
    companyId: number
    jobDescription: number
    jobPostDate: number
    jobAddedDate: number
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    companyId?: true
    numberOfDetailedClicks?: true
    numberOfTimesJobLinkIsClicked?: true
    locationId?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    companyId?: true
    numberOfDetailedClicks?: true
    numberOfTimesJobLinkIsClicked?: true
    locationId?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    jobTitle?: true
    jobLink?: true
    companyId?: true
    jobDescription?: true
    jobPostDate?: true
    jobAddedDate?: true
    numberOfDetailedClicks?: true
    numberOfTimesJobLinkIsClicked?: true
    locationId?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    jobTitle?: true
    jobLink?: true
    companyId?: true
    jobDescription?: true
    jobPostDate?: true
    jobAddedDate?: true
    numberOfDetailedClicks?: true
    numberOfTimesJobLinkIsClicked?: true
    locationId?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    jobTitle?: true
    jobLink?: true
    companyId?: true
    jobDescription?: true
    jobPostDate?: true
    jobAddedDate?: true
    numberOfDetailedClicks?: true
    numberOfTimesJobLinkIsClicked?: true
    locationId?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription: string | null
    jobPostDate: Date | null
    jobAddedDate: Date | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId: number | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitle?: boolean
    jobLink?: boolean
    companyId?: boolean
    jobDescription?: boolean
    jobPostDate?: boolean
    jobAddedDate?: boolean
    numberOfDetailedClicks?: boolean
    numberOfTimesJobLinkIsClicked?: boolean
    locationId?: boolean
    companyName?: boolean | CompanyDefaultArgs<ExtArgs>
    technologies?: boolean | Job$technologiesArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    Location?: boolean | Job$LocationArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    jobTitle?: boolean
    jobLink?: boolean
    companyId?: boolean
    jobDescription?: boolean
    jobPostDate?: boolean
    jobAddedDate?: boolean
    numberOfDetailedClicks?: boolean
    numberOfTimesJobLinkIsClicked?: boolean
    locationId?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyName?: boolean | CompanyDefaultArgs<ExtArgs>
    technologies?: boolean | Job$technologiesArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    Location?: boolean | Job$LocationArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      companyName: Prisma.$CompanyPayload<ExtArgs>
      technologies: Prisma.$JobTechnologiesPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      Location: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobTitle: string
      jobLink: string
      companyId: number
      jobDescription: string | null
      jobPostDate: Date | null
      jobAddedDate: Date | null
      numberOfDetailedClicks: number
      numberOfTimesJobLinkIsClicked: number
      locationId: number | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }


  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
    **/
    create<T extends JobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
    **/
    delete<T extends JobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
    **/
    upsert<T extends JobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    companyName<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    technologies<T extends Job$technologiesArgs<ExtArgs> = {}>(args?: Subset<T, Job$technologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Location<T extends Job$LocationArgs<ExtArgs> = {}>(args?: Subset<T, Job$LocationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly jobTitle: FieldRef<"Job", 'String'>
    readonly jobLink: FieldRef<"Job", 'String'>
    readonly companyId: FieldRef<"Job", 'Int'>
    readonly jobDescription: FieldRef<"Job", 'String'>
    readonly jobPostDate: FieldRef<"Job", 'DateTime'>
    readonly jobAddedDate: FieldRef<"Job", 'DateTime'>
    readonly numberOfDetailedClicks: FieldRef<"Job", 'Int'>
    readonly numberOfTimesJobLinkIsClicked: FieldRef<"Job", 'Int'>
    readonly locationId: FieldRef<"Job", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }


  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }


  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }


  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }


  /**
   * Job.technologies
   */
  export type Job$technologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    where?: JobTechnologiesWhereInput
    orderBy?: JobTechnologiesOrderByWithRelationInput | JobTechnologiesOrderByWithRelationInput[]
    cursor?: JobTechnologiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobTechnologiesScalarFieldEnum | JobTechnologiesScalarFieldEnum[]
  }


  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Job.Location
   */
  export type Job$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }


  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
  }



  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    companyLogoUrl: string | null
    companyName: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    companyLogoUrl: string | null
    companyName: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    companyLogoUrl: number
    companyName: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    companyLogoUrl?: true
    companyName?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    companyLogoUrl?: true
    companyName?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    companyLogoUrl?: true
    companyName?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    companyLogoUrl: string | null
    companyName: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyLogoUrl?: boolean
    companyName?: boolean
    Job?: boolean | Company$JobArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    companyLogoUrl?: boolean
    companyName?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Job?: boolean | Company$JobArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      Job: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyLogoUrl: string | null
      companyName: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }


  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
    **/
    create<T extends CompanyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
    **/
    delete<T extends CompanyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>
    ): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Job<T extends Company$JobArgs<ExtArgs> = {}>(args?: Subset<T, Company$JobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly companyLogoUrl: FieldRef<"Company", 'String'>
    readonly companyName: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }


  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }


  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }


  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }


  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }


  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }


  /**
   * Company.Job
   */
  export type Company$JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyInclude<ExtArgs> | null
  }



  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    countryName: string | null
    countryIcon: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    countryName: string | null
    countryIcon: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    countryName: number
    countryIcon: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    countryName?: true
    countryIcon?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    countryName?: true
    countryIcon?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    countryName?: true
    countryIcon?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    countryName: string
    countryIcon: string | null
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryName?: boolean
    countryIcon?: boolean
    Location?: boolean | Country$LocationArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    countryName?: boolean
    countryIcon?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | Country$LocationArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      Location: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      countryName: string
      countryIcon: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }


  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryCreateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Location<T extends Country$LocationArgs<ExtArgs> = {}>(args?: Subset<T, Country$LocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly countryName: FieldRef<"Country", 'String'>
    readonly countryIcon: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.Location
   */
  export type Country$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
  }



  /**
   * Model Continent
   */

  export type AggregateContinent = {
    _count: ContinentCountAggregateOutputType | null
    _avg: ContinentAvgAggregateOutputType | null
    _sum: ContinentSumAggregateOutputType | null
    _min: ContinentMinAggregateOutputType | null
    _max: ContinentMaxAggregateOutputType | null
  }

  export type ContinentAvgAggregateOutputType = {
    id: number | null
  }

  export type ContinentSumAggregateOutputType = {
    id: number | null
  }

  export type ContinentMinAggregateOutputType = {
    id: number | null
    continentName: string | null
  }

  export type ContinentMaxAggregateOutputType = {
    id: number | null
    continentName: string | null
  }

  export type ContinentCountAggregateOutputType = {
    id: number
    continentName: number
    _all: number
  }


  export type ContinentAvgAggregateInputType = {
    id?: true
  }

  export type ContinentSumAggregateInputType = {
    id?: true
  }

  export type ContinentMinAggregateInputType = {
    id?: true
    continentName?: true
  }

  export type ContinentMaxAggregateInputType = {
    id?: true
    continentName?: true
  }

  export type ContinentCountAggregateInputType = {
    id?: true
    continentName?: true
    _all?: true
  }

  export type ContinentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Continent to aggregate.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: ContinentOrderByWithRelationInput | ContinentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Continents
    **/
    _count?: true | ContinentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContinentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContinentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContinentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContinentMaxAggregateInputType
  }

  export type GetContinentAggregateType<T extends ContinentAggregateArgs> = {
        [P in keyof T & keyof AggregateContinent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContinent[P]>
      : GetScalarType<T[P], AggregateContinent[P]>
  }




  export type ContinentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContinentWhereInput
    orderBy?: ContinentOrderByWithAggregationInput | ContinentOrderByWithAggregationInput[]
    by: ContinentScalarFieldEnum[] | ContinentScalarFieldEnum
    having?: ContinentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContinentCountAggregateInputType | true
    _avg?: ContinentAvgAggregateInputType
    _sum?: ContinentSumAggregateInputType
    _min?: ContinentMinAggregateInputType
    _max?: ContinentMaxAggregateInputType
  }

  export type ContinentGroupByOutputType = {
    id: number
    continentName: string
    _count: ContinentCountAggregateOutputType | null
    _avg: ContinentAvgAggregateOutputType | null
    _sum: ContinentSumAggregateOutputType | null
    _min: ContinentMinAggregateOutputType | null
    _max: ContinentMaxAggregateOutputType | null
  }

  type GetContinentGroupByPayload<T extends ContinentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContinentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContinentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContinentGroupByOutputType[P]>
            : GetScalarType<T[P], ContinentGroupByOutputType[P]>
        }
      >
    >


  export type ContinentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    continentName?: boolean
    Location?: boolean | Continent$LocationArgs<ExtArgs>
    _count?: boolean | ContinentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["continent"]>

  export type ContinentSelectScalar = {
    id?: boolean
    continentName?: boolean
  }

  export type ContinentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | Continent$LocationArgs<ExtArgs>
    _count?: boolean | ContinentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ContinentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Continent"
    objects: {
      Location: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      continentName: string
    }, ExtArgs["result"]["continent"]>
    composites: {}
  }


  type ContinentGetPayload<S extends boolean | null | undefined | ContinentDefaultArgs> = $Result.GetResult<Prisma.$ContinentPayload, S>

  type ContinentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContinentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContinentCountAggregateInputType | true
    }

  export interface ContinentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Continent'], meta: { name: 'Continent' } }
    /**
     * Find zero or one Continent that matches the filter.
     * @param {ContinentFindUniqueArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContinentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContinentFindUniqueArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Continent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContinentFindUniqueOrThrowArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContinentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContinentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Continent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentFindFirstArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContinentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContinentFindFirstArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Continent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentFindFirstOrThrowArgs} args - Arguments to find a Continent
     * @example
     * // Get one Continent
     * const continent = await prisma.continent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContinentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContinentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Continents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Continents
     * const continents = await prisma.continent.findMany()
     * 
     * // Get first 10 Continents
     * const continents = await prisma.continent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const continentWithIdOnly = await prisma.continent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContinentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContinentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Continent.
     * @param {ContinentCreateArgs} args - Arguments to create a Continent.
     * @example
     * // Create one Continent
     * const Continent = await prisma.continent.create({
     *   data: {
     *     // ... data to create a Continent
     *   }
     * })
     * 
    **/
    create<T extends ContinentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContinentCreateArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Continents.
     *     @param {ContinentCreateManyArgs} args - Arguments to create many Continents.
     *     @example
     *     // Create many Continents
     *     const continent = await prisma.continent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContinentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContinentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Continent.
     * @param {ContinentDeleteArgs} args - Arguments to delete one Continent.
     * @example
     * // Delete one Continent
     * const Continent = await prisma.continent.delete({
     *   where: {
     *     // ... filter to delete one Continent
     *   }
     * })
     * 
    **/
    delete<T extends ContinentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContinentDeleteArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Continent.
     * @param {ContinentUpdateArgs} args - Arguments to update one Continent.
     * @example
     * // Update one Continent
     * const continent = await prisma.continent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContinentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContinentUpdateArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Continents.
     * @param {ContinentDeleteManyArgs} args - Arguments to filter Continents to delete.
     * @example
     * // Delete a few Continents
     * const { count } = await prisma.continent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContinentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContinentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Continents
     * const continent = await prisma.continent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContinentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContinentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Continent.
     * @param {ContinentUpsertArgs} args - Arguments to update or create a Continent.
     * @example
     * // Update or create a Continent
     * const continent = await prisma.continent.upsert({
     *   create: {
     *     // ... data to create a Continent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Continent we want to update
     *   }
     * })
    **/
    upsert<T extends ContinentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContinentUpsertArgs<ExtArgs>>
    ): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentCountArgs} args - Arguments to filter Continents to count.
     * @example
     * // Count the number of Continents
     * const count = await prisma.continent.count({
     *   where: {
     *     // ... the filter for the Continents we want to count
     *   }
     * })
    **/
    count<T extends ContinentCountArgs>(
      args?: Subset<T, ContinentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContinentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Continent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContinentAggregateArgs>(args: Subset<T, ContinentAggregateArgs>): Prisma.PrismaPromise<GetContinentAggregateType<T>>

    /**
     * Group by Continent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContinentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContinentGroupByArgs['orderBy'] }
        : { orderBy?: ContinentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContinentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContinentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Continent model
   */
  readonly fields: ContinentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Continent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContinentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Location<T extends Continent$LocationArgs<ExtArgs> = {}>(args?: Subset<T, Continent$LocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Continent model
   */ 
  interface ContinentFieldRefs {
    readonly id: FieldRef<"Continent", 'Int'>
    readonly continentName: FieldRef<"Continent", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Continent findUnique
   */
  export type ContinentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * Filter, which Continent to fetch.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent findUniqueOrThrow
   */
  export type ContinentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * Filter, which Continent to fetch.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent findFirst
   */
  export type ContinentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * Filter, which Continent to fetch.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: ContinentOrderByWithRelationInput | ContinentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Continents.
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Continents.
     */
    distinct?: ContinentScalarFieldEnum | ContinentScalarFieldEnum[]
  }


  /**
   * Continent findFirstOrThrow
   */
  export type ContinentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * Filter, which Continent to fetch.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: ContinentOrderByWithRelationInput | ContinentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Continents.
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Continents.
     */
    distinct?: ContinentScalarFieldEnum | ContinentScalarFieldEnum[]
  }


  /**
   * Continent findMany
   */
  export type ContinentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * Filter, which Continents to fetch.
     */
    where?: ContinentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: ContinentOrderByWithRelationInput | ContinentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Continents.
     */
    cursor?: ContinentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    distinct?: ContinentScalarFieldEnum | ContinentScalarFieldEnum[]
  }


  /**
   * Continent create
   */
  export type ContinentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * The data needed to create a Continent.
     */
    data: XOR<ContinentCreateInput, ContinentUncheckedCreateInput>
  }


  /**
   * Continent createMany
   */
  export type ContinentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Continents.
     */
    data: ContinentCreateManyInput | ContinentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Continent update
   */
  export type ContinentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * The data needed to update a Continent.
     */
    data: XOR<ContinentUpdateInput, ContinentUncheckedUpdateInput>
    /**
     * Choose, which Continent to update.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent updateMany
   */
  export type ContinentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Continents.
     */
    data: XOR<ContinentUpdateManyMutationInput, ContinentUncheckedUpdateManyInput>
    /**
     * Filter which Continents to update
     */
    where?: ContinentWhereInput
  }


  /**
   * Continent upsert
   */
  export type ContinentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * The filter to search for the Continent to update in case it exists.
     */
    where: ContinentWhereUniqueInput
    /**
     * In case the Continent found by the `where` argument doesn't exist, create a new Continent with this data.
     */
    create: XOR<ContinentCreateInput, ContinentUncheckedCreateInput>
    /**
     * In case the Continent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContinentUpdateInput, ContinentUncheckedUpdateInput>
  }


  /**
   * Continent delete
   */
  export type ContinentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    /**
     * Filter which Continent to delete.
     */
    where: ContinentWhereUniqueInput
  }


  /**
   * Continent deleteMany
   */
  export type ContinentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Continents to delete
     */
    where?: ContinentWhereInput
  }


  /**
   * Continent.Location
   */
  export type Continent$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Continent without action
   */
  export type ContinentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
  }



  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    cityName: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    cityName: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    cityName: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    cityName?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    cityName?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    cityName?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    cityName: string
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityName?: boolean
    Location?: boolean | City$LocationArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    cityName?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Location?: boolean | City$LocationArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      Location: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityName: string
    }, ExtArgs["result"]["city"]>
    composites: {}
  }


  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends CityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CityCreateArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cities.
     *     @param {CityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends CityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CityDeleteArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpdateArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends CityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CityUpsertArgs<ExtArgs>>
    ): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Location<T extends City$LocationArgs<ExtArgs> = {}>(args?: Subset<T, City$LocationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly cityName: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes

  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }


  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }


  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }


  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }


  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }


  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }


  /**
   * City.Location
   */
  export type City$LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
  }



  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    cityId: number | null
    countryId: number | null
    continentId: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    cityId: number | null
    countryId: number | null
    continentId: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    cityId: number | null
    countryId: number | null
    continentId: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    cityId: number | null
    countryId: number | null
    continentId: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    cityId: number
    countryId: number
    continentId: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    cityId?: true
    countryId?: true
    continentId?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    cityId?: true
    countryId?: true
    continentId?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    cityId?: true
    countryId?: true
    continentId?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    cityId?: true
    countryId?: true
    continentId?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    cityId?: true
    countryId?: true
    continentId?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    cityId: number | null
    countryId: number | null
    continentId: number | null
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cityId?: boolean
    countryId?: boolean
    continentId?: boolean
    City?: boolean | Location$CityArgs<ExtArgs>
    Country?: boolean | Location$CountryArgs<ExtArgs>
    Continent?: boolean | Location$ContinentArgs<ExtArgs>
    job?: boolean | Location$jobArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    cityId?: boolean
    countryId?: boolean
    continentId?: boolean
  }

  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    City?: boolean | Location$CityArgs<ExtArgs>
    Country?: boolean | Location$CountryArgs<ExtArgs>
    Continent?: boolean | Location$ContinentArgs<ExtArgs>
    job?: boolean | Location$jobArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      City: Prisma.$CityPayload<ExtArgs> | null
      Country: Prisma.$CountryPayload<ExtArgs> | null
      Continent: Prisma.$ContinentPayload<ExtArgs> | null
      job: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cityId: number | null
      countryId: number | null
      continentId: number | null
    }, ExtArgs["result"]["location"]>
    composites: {}
  }


  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationCreateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Locations.
     *     @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     *     @example
     *     // Create many Locations
     *     const location = await prisma.location.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>
    ): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    City<T extends Location$CityArgs<ExtArgs> = {}>(args?: Subset<T, Location$CityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Country<T extends Location$CountryArgs<ExtArgs> = {}>(args?: Subset<T, Location$CountryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Continent<T extends Location$ContinentArgs<ExtArgs> = {}>(args?: Subset<T, Location$ContinentArgs<ExtArgs>>): Prisma__ContinentClient<$Result.GetResult<Prisma.$ContinentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    job<T extends Location$jobArgs<ExtArgs> = {}>(args?: Subset<T, Location$jobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly cityId: FieldRef<"Location", 'Int'>
    readonly countryId: FieldRef<"Location", 'Int'>
    readonly continentId: FieldRef<"Location", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }


  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data?: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }


  /**
   * Location.City
   */
  export type Location$CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }


  /**
   * Location.Country
   */
  export type Location$CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }


  /**
   * Location.Continent
   */
  export type Location$ContinentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Continent
     */
    select?: ContinentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContinentInclude<ExtArgs> | null
    where?: ContinentWhereInput
  }


  /**
   * Location.job
   */
  export type Location$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    userStatisticsId: number | null
    technologyId: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    userStatisticsId: number | null
    technologyId: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    supabaseId: string | null
    firstName: string | null
    lastName: string | null
    emailAddress: string | null
    isEmailVerified: boolean | null
    userStatisticsId: number | null
    technologyId: number | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    supabaseId: string | null
    firstName: string | null
    lastName: string | null
    emailAddress: string | null
    isEmailVerified: boolean | null
    userStatisticsId: number | null
    technologyId: number | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseId: number
    firstName: number
    lastName: number
    emailAddress: number
    isEmailVerified: number
    userStatisticsId: number
    technologyId: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    userStatisticsId?: true
    technologyId?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    userStatisticsId?: true
    technologyId?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    supabaseId?: true
    firstName?: true
    lastName?: true
    emailAddress?: true
    isEmailVerified?: true
    userStatisticsId?: true
    technologyId?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseId?: true
    firstName?: true
    lastName?: true
    emailAddress?: true
    isEmailVerified?: true
    userStatisticsId?: true
    technologyId?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseId?: true
    firstName?: true
    lastName?: true
    emailAddress?: true
    isEmailVerified?: true
    userStatisticsId?: true
    technologyId?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    supabaseId: string
    firstName: string | null
    lastName: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId: number | null
    technologyId: number | null
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseId?: boolean
    firstName?: boolean
    lastName?: boolean
    emailAddress?: boolean
    isEmailVerified?: boolean
    userStatisticsId?: boolean
    technologyId?: boolean
    roleId?: boolean
    userStatistics?: boolean | User$userStatisticsArgs<ExtArgs>
    technologyPreferences?: boolean | User$technologyPreferencesArgs<ExtArgs>
    professionalExperience?: boolean | User$professionalExperienceArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseId?: boolean
    firstName?: boolean
    lastName?: boolean
    emailAddress?: boolean
    isEmailVerified?: boolean
    userStatisticsId?: boolean
    technologyId?: boolean
    roleId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userStatistics?: boolean | User$userStatisticsArgs<ExtArgs>
    technologyPreferences?: boolean | User$technologyPreferencesArgs<ExtArgs>
    professionalExperience?: boolean | User$professionalExperienceArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userStatistics: Prisma.$UserStatisticsPayload<ExtArgs> | null
      technologyPreferences: Prisma.$TechnologyPayload<ExtArgs> | null
      professionalExperience: Prisma.$ExperiencePayload<ExtArgs> | null
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      Role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supabaseId: string
      firstName: string | null
      lastName: string | null
      emailAddress: string
      isEmailVerified: boolean
      userStatisticsId: number | null
      technologyId: number | null
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userStatistics<T extends User$userStatisticsArgs<ExtArgs> = {}>(args?: Subset<T, User$userStatisticsArgs<ExtArgs>>): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    technologyPreferences<T extends User$technologyPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$technologyPreferencesArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    professionalExperience<T extends User$professionalExperienceArgs<ExtArgs> = {}>(args?: Subset<T, User$professionalExperienceArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly supabaseId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly emailAddress: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly userStatisticsId: FieldRef<"User", 'Int'>
    readonly technologyId: FieldRef<"User", 'Int'>
    readonly roleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.userStatistics
   */
  export type User$userStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    where?: UserStatisticsWhereInput
  }


  /**
   * User.technologyPreferences
   */
  export type User$technologyPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    where?: TechnologyWhereInput
  }


  /**
   * User.professionalExperience
   */
  export type User$professionalExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
  }


  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    roleName: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    roleName: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    roleName: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    roleName?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    roleName?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    roleName?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    roleName: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleName?: boolean
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    roleName?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleName: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly roleName: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model UserStatistics
   */

  export type AggregateUserStatistics = {
    _count: UserStatisticsCountAggregateOutputType | null
    _avg: UserStatisticsAvgAggregateOutputType | null
    _sum: UserStatisticsSumAggregateOutputType | null
    _min: UserStatisticsMinAggregateOutputType | null
    _max: UserStatisticsMaxAggregateOutputType | null
  }

  export type UserStatisticsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    jobId: number | null
  }

  export type UserStatisticsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    jobId: number | null
  }

  export type UserStatisticsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    jobId: number | null
  }

  export type UserStatisticsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    jobId: number | null
  }

  export type UserStatisticsCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    _all: number
  }


  export type UserStatisticsAvgAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
  }

  export type UserStatisticsSumAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
  }

  export type UserStatisticsMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
  }

  export type UserStatisticsMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
  }

  export type UserStatisticsCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    _all?: true
  }

  export type UserStatisticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStatistics to aggregate.
     */
    where?: UserStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatistics to fetch.
     */
    orderBy?: UserStatisticsOrderByWithRelationInput | UserStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStatistics
    **/
    _count?: true | UserStatisticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatisticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatisticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatisticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatisticsMaxAggregateInputType
  }

  export type GetUserStatisticsAggregateType<T extends UserStatisticsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStatistics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStatistics[P]>
      : GetScalarType<T[P], AggregateUserStatistics[P]>
  }




  export type UserStatisticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatisticsWhereInput
    orderBy?: UserStatisticsOrderByWithAggregationInput | UserStatisticsOrderByWithAggregationInput[]
    by: UserStatisticsScalarFieldEnum[] | UserStatisticsScalarFieldEnum
    having?: UserStatisticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatisticsCountAggregateInputType | true
    _avg?: UserStatisticsAvgAggregateInputType
    _sum?: UserStatisticsSumAggregateInputType
    _min?: UserStatisticsMinAggregateInputType
    _max?: UserStatisticsMaxAggregateInputType
  }

  export type UserStatisticsGroupByOutputType = {
    id: number
    userId: number
    jobId: number | null
    _count: UserStatisticsCountAggregateOutputType | null
    _avg: UserStatisticsAvgAggregateOutputType | null
    _sum: UserStatisticsSumAggregateOutputType | null
    _min: UserStatisticsMinAggregateOutputType | null
    _max: UserStatisticsMaxAggregateOutputType | null
  }

  type GetUserStatisticsGroupByPayload<T extends UserStatisticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatisticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatisticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatisticsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatisticsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatisticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    User?: boolean | UserStatistics$UserArgs<ExtArgs>
    _count?: boolean | UserStatisticsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStatistics"]>

  export type UserStatisticsSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
  }

  export type UserStatisticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserStatistics$UserArgs<ExtArgs>
    _count?: boolean | UserStatisticsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserStatisticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStatistics"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      jobId: number | null
    }, ExtArgs["result"]["userStatistics"]>
    composites: {}
  }


  type UserStatisticsGetPayload<S extends boolean | null | undefined | UserStatisticsDefaultArgs> = $Result.GetResult<Prisma.$UserStatisticsPayload, S>

  type UserStatisticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStatisticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStatisticsCountAggregateInputType | true
    }

  export interface UserStatisticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStatistics'], meta: { name: 'UserStatistics' } }
    /**
     * Find zero or one UserStatistics that matches the filter.
     * @param {UserStatisticsFindUniqueArgs} args - Arguments to find a UserStatistics
     * @example
     * // Get one UserStatistics
     * const userStatistics = await prisma.userStatistics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserStatisticsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatisticsFindUniqueArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserStatistics that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserStatisticsFindUniqueOrThrowArgs} args - Arguments to find a UserStatistics
     * @example
     * // Get one UserStatistics
     * const userStatistics = await prisma.userStatistics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserStatisticsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatisticsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsFindFirstArgs} args - Arguments to find a UserStatistics
     * @example
     * // Get one UserStatistics
     * const userStatistics = await prisma.userStatistics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserStatisticsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatisticsFindFirstArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserStatistics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsFindFirstOrThrowArgs} args - Arguments to find a UserStatistics
     * @example
     * // Get one UserStatistics
     * const userStatistics = await prisma.userStatistics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserStatisticsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatisticsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStatistics
     * const userStatistics = await prisma.userStatistics.findMany()
     * 
     * // Get first 10 UserStatistics
     * const userStatistics = await prisma.userStatistics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatisticsWithIdOnly = await prisma.userStatistics.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserStatisticsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatisticsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserStatistics.
     * @param {UserStatisticsCreateArgs} args - Arguments to create a UserStatistics.
     * @example
     * // Create one UserStatistics
     * const UserStatistics = await prisma.userStatistics.create({
     *   data: {
     *     // ... data to create a UserStatistics
     *   }
     * })
     * 
    **/
    create<T extends UserStatisticsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatisticsCreateArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserStatistics.
     *     @param {UserStatisticsCreateManyArgs} args - Arguments to create many UserStatistics.
     *     @example
     *     // Create many UserStatistics
     *     const userStatistics = await prisma.userStatistics.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserStatisticsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatisticsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserStatistics.
     * @param {UserStatisticsDeleteArgs} args - Arguments to delete one UserStatistics.
     * @example
     * // Delete one UserStatistics
     * const UserStatistics = await prisma.userStatistics.delete({
     *   where: {
     *     // ... filter to delete one UserStatistics
     *   }
     * })
     * 
    **/
    delete<T extends UserStatisticsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatisticsDeleteArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserStatistics.
     * @param {UserStatisticsUpdateArgs} args - Arguments to update one UserStatistics.
     * @example
     * // Update one UserStatistics
     * const userStatistics = await prisma.userStatistics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserStatisticsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatisticsUpdateArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserStatistics.
     * @param {UserStatisticsDeleteManyArgs} args - Arguments to filter UserStatistics to delete.
     * @example
     * // Delete a few UserStatistics
     * const { count } = await prisma.userStatistics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserStatisticsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserStatisticsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStatistics
     * const userStatistics = await prisma.userStatistics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserStatisticsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatisticsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStatistics.
     * @param {UserStatisticsUpsertArgs} args - Arguments to update or create a UserStatistics.
     * @example
     * // Update or create a UserStatistics
     * const userStatistics = await prisma.userStatistics.upsert({
     *   create: {
     *     // ... data to create a UserStatistics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStatistics we want to update
     *   }
     * })
    **/
    upsert<T extends UserStatisticsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserStatisticsUpsertArgs<ExtArgs>>
    ): Prisma__UserStatisticsClient<$Result.GetResult<Prisma.$UserStatisticsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsCountArgs} args - Arguments to filter UserStatistics to count.
     * @example
     * // Count the number of UserStatistics
     * const count = await prisma.userStatistics.count({
     *   where: {
     *     // ... the filter for the UserStatistics we want to count
     *   }
     * })
    **/
    count<T extends UserStatisticsCountArgs>(
      args?: Subset<T, UserStatisticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatisticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatisticsAggregateArgs>(args: Subset<T, UserStatisticsAggregateArgs>): Prisma.PrismaPromise<GetUserStatisticsAggregateType<T>>

    /**
     * Group by UserStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatisticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatisticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatisticsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatisticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStatistics model
   */
  readonly fields: UserStatisticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStatistics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatisticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserStatistics$UserArgs<ExtArgs> = {}>(args?: Subset<T, UserStatistics$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserStatistics model
   */ 
  interface UserStatisticsFieldRefs {
    readonly id: FieldRef<"UserStatistics", 'Int'>
    readonly userId: FieldRef<"UserStatistics", 'Int'>
    readonly jobId: FieldRef<"UserStatistics", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserStatistics findUnique
   */
  export type UserStatisticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * Filter, which UserStatistics to fetch.
     */
    where: UserStatisticsWhereUniqueInput
  }


  /**
   * UserStatistics findUniqueOrThrow
   */
  export type UserStatisticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * Filter, which UserStatistics to fetch.
     */
    where: UserStatisticsWhereUniqueInput
  }


  /**
   * UserStatistics findFirst
   */
  export type UserStatisticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * Filter, which UserStatistics to fetch.
     */
    where?: UserStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatistics to fetch.
     */
    orderBy?: UserStatisticsOrderByWithRelationInput | UserStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStatistics.
     */
    cursor?: UserStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStatistics.
     */
    distinct?: UserStatisticsScalarFieldEnum | UserStatisticsScalarFieldEnum[]
  }


  /**
   * UserStatistics findFirstOrThrow
   */
  export type UserStatisticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * Filter, which UserStatistics to fetch.
     */
    where?: UserStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatistics to fetch.
     */
    orderBy?: UserStatisticsOrderByWithRelationInput | UserStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStatistics.
     */
    cursor?: UserStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStatistics.
     */
    distinct?: UserStatisticsScalarFieldEnum | UserStatisticsScalarFieldEnum[]
  }


  /**
   * UserStatistics findMany
   */
  export type UserStatisticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * Filter, which UserStatistics to fetch.
     */
    where?: UserStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatistics to fetch.
     */
    orderBy?: UserStatisticsOrderByWithRelationInput | UserStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStatistics.
     */
    cursor?: UserStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatistics.
     */
    skip?: number
    distinct?: UserStatisticsScalarFieldEnum | UserStatisticsScalarFieldEnum[]
  }


  /**
   * UserStatistics create
   */
  export type UserStatisticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStatistics.
     */
    data: XOR<UserStatisticsCreateInput, UserStatisticsUncheckedCreateInput>
  }


  /**
   * UserStatistics createMany
   */
  export type UserStatisticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStatistics.
     */
    data: UserStatisticsCreateManyInput | UserStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserStatistics update
   */
  export type UserStatisticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStatistics.
     */
    data: XOR<UserStatisticsUpdateInput, UserStatisticsUncheckedUpdateInput>
    /**
     * Choose, which UserStatistics to update.
     */
    where: UserStatisticsWhereUniqueInput
  }


  /**
   * UserStatistics updateMany
   */
  export type UserStatisticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStatistics.
     */
    data: XOR<UserStatisticsUpdateManyMutationInput, UserStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which UserStatistics to update
     */
    where?: UserStatisticsWhereInput
  }


  /**
   * UserStatistics upsert
   */
  export type UserStatisticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStatistics to update in case it exists.
     */
    where: UserStatisticsWhereUniqueInput
    /**
     * In case the UserStatistics found by the `where` argument doesn't exist, create a new UserStatistics with this data.
     */
    create: XOR<UserStatisticsCreateInput, UserStatisticsUncheckedCreateInput>
    /**
     * In case the UserStatistics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatisticsUpdateInput, UserStatisticsUncheckedUpdateInput>
  }


  /**
   * UserStatistics delete
   */
  export type UserStatisticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
    /**
     * Filter which UserStatistics to delete.
     */
    where: UserStatisticsWhereUniqueInput
  }


  /**
   * UserStatistics deleteMany
   */
  export type UserStatisticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStatistics to delete
     */
    where?: UserStatisticsWhereInput
  }


  /**
   * UserStatistics.User
   */
  export type UserStatistics$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * UserStatistics without action
   */
  export type UserStatisticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatistics
     */
    select?: UserStatisticsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserStatisticsInclude<ExtArgs> | null
  }



  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    userId: number | null
    jobId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    userId: number | null
    jobId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    userId: number | null
    jobId: number | null
  }

  export type ApplicationMaxAggregateOutputType = {
    userId: number | null
    jobId: number | null
  }

  export type ApplicationCountAggregateOutputType = {
    userId: number
    jobId: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    userId?: true
    jobId?: true
  }

  export type ApplicationSumAggregateInputType = {
    userId?: true
    jobId?: true
  }

  export type ApplicationMinAggregateInputType = {
    userId?: true
    jobId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    userId?: true
    jobId?: true
  }

  export type ApplicationCountAggregateInputType = {
    userId?: true
    jobId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    userId: number
    jobId: number
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    jobId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    userId?: boolean
    jobId?: boolean
  }

  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | JobDefaultArgs<ExtArgs>
  }


  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      jobId: number
    }, ExtArgs["result"]["application"]>
    composites: {}
  }


  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const applicationWithUserIdOnly = await prisma.application.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Applications.
     *     @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly userId: FieldRef<"Application", 'Int'>
    readonly jobId: FieldRef<"Application", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }


  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }


  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationInclude<ExtArgs> | null
  }



  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    numberOfYears: number | null
    numberOfMonths: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    numberOfYears: number | null
    numberOfMonths: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    numberOfYears: number | null
    numberOfMonths: number | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    numberOfYears: number | null
    numberOfMonths: number | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    numberOfYears: number
    numberOfMonths: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    numberOfYears?: true
    numberOfMonths?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    numberOfYears?: true
    numberOfMonths?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    numberOfYears?: true
    numberOfMonths?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    numberOfYears?: true
    numberOfMonths?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    numberOfYears?: true
    numberOfMonths?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    numberOfYears: number
    numberOfMonths: number
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numberOfYears?: boolean
    numberOfMonths?: boolean
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    numberOfYears?: boolean
    numberOfMonths?: boolean
  }

  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userId?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      userId: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numberOfYears: number
      numberOfMonths: number
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }


  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExperienceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Experience that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExperienceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExperienceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
    **/
    create<T extends ExperienceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Experiences.
     *     @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     *     @example
     *     // Create many Experiences
     *     const experience = await prisma.experience.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExperienceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
    **/
    delete<T extends ExperienceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExperienceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExperienceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExperienceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
    **/
    upsert<T extends ExperienceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>
    ): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userId<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Experience model
   */ 
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly numberOfYears: FieldRef<"Experience", 'Int'>
    readonly numberOfMonths: FieldRef<"Experience", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }


  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }


  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
  }


  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }


  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }


  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
  }


  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperienceInclude<ExtArgs> | null
  }



  /**
   * Model Technology
   */

  export type AggregateTechnology = {
    _count: TechnologyCountAggregateOutputType | null
    _avg: TechnologyAvgAggregateOutputType | null
    _sum: TechnologySumAggregateOutputType | null
    _min: TechnologyMinAggregateOutputType | null
    _max: TechnologyMaxAggregateOutputType | null
  }

  export type TechnologyAvgAggregateOutputType = {
    id: number | null
  }

  export type TechnologySumAggregateOutputType = {
    id: number | null
  }

  export type TechnologyMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    iconUrl: string | null
  }

  export type TechnologyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    iconUrl: string | null
  }

  export type TechnologyCountAggregateOutputType = {
    id: number
    name: number
    type: number
    iconUrl: number
    _all: number
  }


  export type TechnologyAvgAggregateInputType = {
    id?: true
  }

  export type TechnologySumAggregateInputType = {
    id?: true
  }

  export type TechnologyMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    iconUrl?: true
  }

  export type TechnologyMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    iconUrl?: true
  }

  export type TechnologyCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    iconUrl?: true
    _all?: true
  }

  export type TechnologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technology to aggregate.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technologies
    **/
    _count?: true | TechnologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnologyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnologySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnologyMaxAggregateInputType
  }

  export type GetTechnologyAggregateType<T extends TechnologyAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnology[P]>
      : GetScalarType<T[P], AggregateTechnology[P]>
  }




  export type TechnologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnologyWhereInput
    orderBy?: TechnologyOrderByWithAggregationInput | TechnologyOrderByWithAggregationInput[]
    by: TechnologyScalarFieldEnum[] | TechnologyScalarFieldEnum
    having?: TechnologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnologyCountAggregateInputType | true
    _avg?: TechnologyAvgAggregateInputType
    _sum?: TechnologySumAggregateInputType
    _min?: TechnologyMinAggregateInputType
    _max?: TechnologyMaxAggregateInputType
  }

  export type TechnologyGroupByOutputType = {
    id: number
    name: string
    type: string | null
    iconUrl: string | null
    _count: TechnologyCountAggregateOutputType | null
    _avg: TechnologyAvgAggregateOutputType | null
    _sum: TechnologySumAggregateOutputType | null
    _min: TechnologyMinAggregateOutputType | null
    _max: TechnologyMaxAggregateOutputType | null
  }

  type GetTechnologyGroupByPayload<T extends TechnologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnologyGroupByOutputType[P]>
            : GetScalarType<T[P], TechnologyGroupByOutputType[P]>
        }
      >
    >


  export type TechnologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    iconUrl?: boolean
    jobTechnologies?: boolean | Technology$jobTechnologiesArgs<ExtArgs>
    User?: boolean | Technology$UserArgs<ExtArgs>
    _count?: boolean | TechnologyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["technology"]>

  export type TechnologySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    iconUrl?: boolean
  }

  export type TechnologyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobTechnologies?: boolean | Technology$jobTechnologiesArgs<ExtArgs>
    User?: boolean | Technology$UserArgs<ExtArgs>
    _count?: boolean | TechnologyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TechnologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technology"
    objects: {
      jobTechnologies: Prisma.$JobTechnologiesPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string | null
      iconUrl: string | null
    }, ExtArgs["result"]["technology"]>
    composites: {}
  }


  type TechnologyGetPayload<S extends boolean | null | undefined | TechnologyDefaultArgs> = $Result.GetResult<Prisma.$TechnologyPayload, S>

  type TechnologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TechnologyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TechnologyCountAggregateInputType | true
    }

  export interface TechnologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technology'], meta: { name: 'Technology' } }
    /**
     * Find zero or one Technology that matches the filter.
     * @param {TechnologyFindUniqueArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TechnologyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TechnologyFindUniqueArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Technology that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TechnologyFindUniqueOrThrowArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TechnologyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnologyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Technology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindFirstArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TechnologyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnologyFindFirstArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Technology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindFirstOrThrowArgs} args - Arguments to find a Technology
     * @example
     * // Get one Technology
     * const technology = await prisma.technology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TechnologyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnologyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Technologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technologies
     * const technologies = await prisma.technology.findMany()
     * 
     * // Get first 10 Technologies
     * const technologies = await prisma.technology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technologyWithIdOnly = await prisma.technology.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TechnologyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnologyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Technology.
     * @param {TechnologyCreateArgs} args - Arguments to create a Technology.
     * @example
     * // Create one Technology
     * const Technology = await prisma.technology.create({
     *   data: {
     *     // ... data to create a Technology
     *   }
     * })
     * 
    **/
    create<T extends TechnologyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TechnologyCreateArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Technologies.
     *     @param {TechnologyCreateManyArgs} args - Arguments to create many Technologies.
     *     @example
     *     // Create many Technologies
     *     const technology = await prisma.technology.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TechnologyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnologyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Technology.
     * @param {TechnologyDeleteArgs} args - Arguments to delete one Technology.
     * @example
     * // Delete one Technology
     * const Technology = await prisma.technology.delete({
     *   where: {
     *     // ... filter to delete one Technology
     *   }
     * })
     * 
    **/
    delete<T extends TechnologyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TechnologyDeleteArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Technology.
     * @param {TechnologyUpdateArgs} args - Arguments to update one Technology.
     * @example
     * // Update one Technology
     * const technology = await prisma.technology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TechnologyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TechnologyUpdateArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Technologies.
     * @param {TechnologyDeleteManyArgs} args - Arguments to filter Technologies to delete.
     * @example
     * // Delete a few Technologies
     * const { count } = await prisma.technology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TechnologyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnologyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technologies
     * const technology = await prisma.technology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TechnologyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TechnologyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Technology.
     * @param {TechnologyUpsertArgs} args - Arguments to update or create a Technology.
     * @example
     * // Update or create a Technology
     * const technology = await prisma.technology.upsert({
     *   create: {
     *     // ... data to create a Technology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technology we want to update
     *   }
     * })
    **/
    upsert<T extends TechnologyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TechnologyUpsertArgs<ExtArgs>>
    ): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Technologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyCountArgs} args - Arguments to filter Technologies to count.
     * @example
     * // Count the number of Technologies
     * const count = await prisma.technology.count({
     *   where: {
     *     // ... the filter for the Technologies we want to count
     *   }
     * })
    **/
    count<T extends TechnologyCountArgs>(
      args?: Subset<T, TechnologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnologyAggregateArgs>(args: Subset<T, TechnologyAggregateArgs>): Prisma.PrismaPromise<GetTechnologyAggregateType<T>>

    /**
     * Group by Technology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnologyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnologyGroupByArgs['orderBy'] }
        : { orderBy?: TechnologyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technology model
   */
  readonly fields: TechnologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jobTechnologies<T extends Technology$jobTechnologiesArgs<ExtArgs> = {}>(args?: Subset<T, Technology$jobTechnologiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    User<T extends Technology$UserArgs<ExtArgs> = {}>(args?: Subset<T, Technology$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Technology model
   */ 
  interface TechnologyFieldRefs {
    readonly id: FieldRef<"Technology", 'Int'>
    readonly name: FieldRef<"Technology", 'String'>
    readonly type: FieldRef<"Technology", 'String'>
    readonly iconUrl: FieldRef<"Technology", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Technology findUnique
   */
  export type TechnologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where: TechnologyWhereUniqueInput
  }


  /**
   * Technology findUniqueOrThrow
   */
  export type TechnologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where: TechnologyWhereUniqueInput
  }


  /**
   * Technology findFirst
   */
  export type TechnologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technologies.
     */
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }


  /**
   * Technology findFirstOrThrow
   */
  export type TechnologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technology to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technologies.
     */
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }


  /**
   * Technology findMany
   */
  export type TechnologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter, which Technologies to fetch.
     */
    where?: TechnologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technologies to fetch.
     */
    orderBy?: TechnologyOrderByWithRelationInput | TechnologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technologies.
     */
    cursor?: TechnologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technologies.
     */
    skip?: number
    distinct?: TechnologyScalarFieldEnum | TechnologyScalarFieldEnum[]
  }


  /**
   * Technology create
   */
  export type TechnologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The data needed to create a Technology.
     */
    data: XOR<TechnologyCreateInput, TechnologyUncheckedCreateInput>
  }


  /**
   * Technology createMany
   */
  export type TechnologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technologies.
     */
    data: TechnologyCreateManyInput | TechnologyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Technology update
   */
  export type TechnologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The data needed to update a Technology.
     */
    data: XOR<TechnologyUpdateInput, TechnologyUncheckedUpdateInput>
    /**
     * Choose, which Technology to update.
     */
    where: TechnologyWhereUniqueInput
  }


  /**
   * Technology updateMany
   */
  export type TechnologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technologies.
     */
    data: XOR<TechnologyUpdateManyMutationInput, TechnologyUncheckedUpdateManyInput>
    /**
     * Filter which Technologies to update
     */
    where?: TechnologyWhereInput
  }


  /**
   * Technology upsert
   */
  export type TechnologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * The filter to search for the Technology to update in case it exists.
     */
    where: TechnologyWhereUniqueInput
    /**
     * In case the Technology found by the `where` argument doesn't exist, create a new Technology with this data.
     */
    create: XOR<TechnologyCreateInput, TechnologyUncheckedCreateInput>
    /**
     * In case the Technology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnologyUpdateInput, TechnologyUncheckedUpdateInput>
  }


  /**
   * Technology delete
   */
  export type TechnologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
    /**
     * Filter which Technology to delete.
     */
    where: TechnologyWhereUniqueInput
  }


  /**
   * Technology deleteMany
   */
  export type TechnologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technologies to delete
     */
    where?: TechnologyWhereInput
  }


  /**
   * Technology.jobTechnologies
   */
  export type Technology$jobTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    where?: JobTechnologiesWhereInput
    orderBy?: JobTechnologiesOrderByWithRelationInput | JobTechnologiesOrderByWithRelationInput[]
    cursor?: JobTechnologiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobTechnologiesScalarFieldEnum | JobTechnologiesScalarFieldEnum[]
  }


  /**
   * Technology.User
   */
  export type Technology$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Technology without action
   */
  export type TechnologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technology
     */
    select?: TechnologySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechnologyInclude<ExtArgs> | null
  }



  /**
   * Model JobTechnologies
   */

  export type AggregateJobTechnologies = {
    _count: JobTechnologiesCountAggregateOutputType | null
    _avg: JobTechnologiesAvgAggregateOutputType | null
    _sum: JobTechnologiesSumAggregateOutputType | null
    _min: JobTechnologiesMinAggregateOutputType | null
    _max: JobTechnologiesMaxAggregateOutputType | null
  }

  export type JobTechnologiesAvgAggregateOutputType = {
    jobId: number | null
    technologyId: number | null
  }

  export type JobTechnologiesSumAggregateOutputType = {
    jobId: number | null
    technologyId: number | null
  }

  export type JobTechnologiesMinAggregateOutputType = {
    jobId: number | null
    technologyId: number | null
  }

  export type JobTechnologiesMaxAggregateOutputType = {
    jobId: number | null
    technologyId: number | null
  }

  export type JobTechnologiesCountAggregateOutputType = {
    jobId: number
    technologyId: number
    _all: number
  }


  export type JobTechnologiesAvgAggregateInputType = {
    jobId?: true
    technologyId?: true
  }

  export type JobTechnologiesSumAggregateInputType = {
    jobId?: true
    technologyId?: true
  }

  export type JobTechnologiesMinAggregateInputType = {
    jobId?: true
    technologyId?: true
  }

  export type JobTechnologiesMaxAggregateInputType = {
    jobId?: true
    technologyId?: true
  }

  export type JobTechnologiesCountAggregateInputType = {
    jobId?: true
    technologyId?: true
    _all?: true
  }

  export type JobTechnologiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTechnologies to aggregate.
     */
    where?: JobTechnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTechnologies to fetch.
     */
    orderBy?: JobTechnologiesOrderByWithRelationInput | JobTechnologiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobTechnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobTechnologies
    **/
    _count?: true | JobTechnologiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobTechnologiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobTechnologiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobTechnologiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobTechnologiesMaxAggregateInputType
  }

  export type GetJobTechnologiesAggregateType<T extends JobTechnologiesAggregateArgs> = {
        [P in keyof T & keyof AggregateJobTechnologies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobTechnologies[P]>
      : GetScalarType<T[P], AggregateJobTechnologies[P]>
  }




  export type JobTechnologiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobTechnologiesWhereInput
    orderBy?: JobTechnologiesOrderByWithAggregationInput | JobTechnologiesOrderByWithAggregationInput[]
    by: JobTechnologiesScalarFieldEnum[] | JobTechnologiesScalarFieldEnum
    having?: JobTechnologiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobTechnologiesCountAggregateInputType | true
    _avg?: JobTechnologiesAvgAggregateInputType
    _sum?: JobTechnologiesSumAggregateInputType
    _min?: JobTechnologiesMinAggregateInputType
    _max?: JobTechnologiesMaxAggregateInputType
  }

  export type JobTechnologiesGroupByOutputType = {
    jobId: number
    technologyId: number
    _count: JobTechnologiesCountAggregateOutputType | null
    _avg: JobTechnologiesAvgAggregateOutputType | null
    _sum: JobTechnologiesSumAggregateOutputType | null
    _min: JobTechnologiesMinAggregateOutputType | null
    _max: JobTechnologiesMaxAggregateOutputType | null
  }

  type GetJobTechnologiesGroupByPayload<T extends JobTechnologiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobTechnologiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobTechnologiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobTechnologiesGroupByOutputType[P]>
            : GetScalarType<T[P], JobTechnologiesGroupByOutputType[P]>
        }
      >
    >


  export type JobTechnologiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobId?: boolean
    technologyId?: boolean
    Job?: boolean | JobDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobTechnologies"]>

  export type JobTechnologiesSelectScalar = {
    jobId?: boolean
    technologyId?: boolean
  }

  export type JobTechnologiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Job?: boolean | JobDefaultArgs<ExtArgs>
    technology?: boolean | TechnologyDefaultArgs<ExtArgs>
  }


  export type $JobTechnologiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobTechnologies"
    objects: {
      Job: Prisma.$JobPayload<ExtArgs>
      technology: Prisma.$TechnologyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      jobId: number
      technologyId: number
    }, ExtArgs["result"]["jobTechnologies"]>
    composites: {}
  }


  type JobTechnologiesGetPayload<S extends boolean | null | undefined | JobTechnologiesDefaultArgs> = $Result.GetResult<Prisma.$JobTechnologiesPayload, S>

  type JobTechnologiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobTechnologiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobTechnologiesCountAggregateInputType | true
    }

  export interface JobTechnologiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobTechnologies'], meta: { name: 'JobTechnologies' } }
    /**
     * Find zero or one JobTechnologies that matches the filter.
     * @param {JobTechnologiesFindUniqueArgs} args - Arguments to find a JobTechnologies
     * @example
     * // Get one JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobTechnologiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobTechnologiesFindUniqueArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one JobTechnologies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobTechnologiesFindUniqueOrThrowArgs} args - Arguments to find a JobTechnologies
     * @example
     * // Get one JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobTechnologiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobTechnologiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first JobTechnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesFindFirstArgs} args - Arguments to find a JobTechnologies
     * @example
     * // Get one JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobTechnologiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobTechnologiesFindFirstArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first JobTechnologies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesFindFirstOrThrowArgs} args - Arguments to find a JobTechnologies
     * @example
     * // Get one JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobTechnologiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobTechnologiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more JobTechnologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.findMany()
     * 
     * // Get first 10 JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.findMany({ take: 10 })
     * 
     * // Only select the `jobId`
     * const jobTechnologiesWithJobIdOnly = await prisma.jobTechnologies.findMany({ select: { jobId: true } })
     * 
    **/
    findMany<T extends JobTechnologiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobTechnologiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a JobTechnologies.
     * @param {JobTechnologiesCreateArgs} args - Arguments to create a JobTechnologies.
     * @example
     * // Create one JobTechnologies
     * const JobTechnologies = await prisma.jobTechnologies.create({
     *   data: {
     *     // ... data to create a JobTechnologies
     *   }
     * })
     * 
    **/
    create<T extends JobTechnologiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobTechnologiesCreateArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many JobTechnologies.
     *     @param {JobTechnologiesCreateManyArgs} args - Arguments to create many JobTechnologies.
     *     @example
     *     // Create many JobTechnologies
     *     const jobTechnologies = await prisma.jobTechnologies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobTechnologiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobTechnologiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobTechnologies.
     * @param {JobTechnologiesDeleteArgs} args - Arguments to delete one JobTechnologies.
     * @example
     * // Delete one JobTechnologies
     * const JobTechnologies = await prisma.jobTechnologies.delete({
     *   where: {
     *     // ... filter to delete one JobTechnologies
     *   }
     * })
     * 
    **/
    delete<T extends JobTechnologiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobTechnologiesDeleteArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one JobTechnologies.
     * @param {JobTechnologiesUpdateArgs} args - Arguments to update one JobTechnologies.
     * @example
     * // Update one JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobTechnologiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobTechnologiesUpdateArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more JobTechnologies.
     * @param {JobTechnologiesDeleteManyArgs} args - Arguments to filter JobTechnologies to delete.
     * @example
     * // Delete a few JobTechnologies
     * const { count } = await prisma.jobTechnologies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobTechnologiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobTechnologiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobTechnologiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobTechnologiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobTechnologies.
     * @param {JobTechnologiesUpsertArgs} args - Arguments to update or create a JobTechnologies.
     * @example
     * // Update or create a JobTechnologies
     * const jobTechnologies = await prisma.jobTechnologies.upsert({
     *   create: {
     *     // ... data to create a JobTechnologies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobTechnologies we want to update
     *   }
     * })
    **/
    upsert<T extends JobTechnologiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobTechnologiesUpsertArgs<ExtArgs>>
    ): Prisma__JobTechnologiesClient<$Result.GetResult<Prisma.$JobTechnologiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of JobTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesCountArgs} args - Arguments to filter JobTechnologies to count.
     * @example
     * // Count the number of JobTechnologies
     * const count = await prisma.jobTechnologies.count({
     *   where: {
     *     // ... the filter for the JobTechnologies we want to count
     *   }
     * })
    **/
    count<T extends JobTechnologiesCountArgs>(
      args?: Subset<T, JobTechnologiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobTechnologiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobTechnologiesAggregateArgs>(args: Subset<T, JobTechnologiesAggregateArgs>): Prisma.PrismaPromise<GetJobTechnologiesAggregateType<T>>

    /**
     * Group by JobTechnologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobTechnologiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobTechnologiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobTechnologiesGroupByArgs['orderBy'] }
        : { orderBy?: JobTechnologiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobTechnologiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobTechnologiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobTechnologies model
   */
  readonly fields: JobTechnologiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobTechnologies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobTechnologiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    technology<T extends TechnologyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TechnologyDefaultArgs<ExtArgs>>): Prisma__TechnologyClient<$Result.GetResult<Prisma.$TechnologyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the JobTechnologies model
   */ 
  interface JobTechnologiesFieldRefs {
    readonly jobId: FieldRef<"JobTechnologies", 'Int'>
    readonly technologyId: FieldRef<"JobTechnologies", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * JobTechnologies findUnique
   */
  export type JobTechnologiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * Filter, which JobTechnologies to fetch.
     */
    where: JobTechnologiesWhereUniqueInput
  }


  /**
   * JobTechnologies findUniqueOrThrow
   */
  export type JobTechnologiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * Filter, which JobTechnologies to fetch.
     */
    where: JobTechnologiesWhereUniqueInput
  }


  /**
   * JobTechnologies findFirst
   */
  export type JobTechnologiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * Filter, which JobTechnologies to fetch.
     */
    where?: JobTechnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTechnologies to fetch.
     */
    orderBy?: JobTechnologiesOrderByWithRelationInput | JobTechnologiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTechnologies.
     */
    cursor?: JobTechnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTechnologies.
     */
    distinct?: JobTechnologiesScalarFieldEnum | JobTechnologiesScalarFieldEnum[]
  }


  /**
   * JobTechnologies findFirstOrThrow
   */
  export type JobTechnologiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * Filter, which JobTechnologies to fetch.
     */
    where?: JobTechnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTechnologies to fetch.
     */
    orderBy?: JobTechnologiesOrderByWithRelationInput | JobTechnologiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobTechnologies.
     */
    cursor?: JobTechnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTechnologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobTechnologies.
     */
    distinct?: JobTechnologiesScalarFieldEnum | JobTechnologiesScalarFieldEnum[]
  }


  /**
   * JobTechnologies findMany
   */
  export type JobTechnologiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * Filter, which JobTechnologies to fetch.
     */
    where?: JobTechnologiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobTechnologies to fetch.
     */
    orderBy?: JobTechnologiesOrderByWithRelationInput | JobTechnologiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobTechnologies.
     */
    cursor?: JobTechnologiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobTechnologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobTechnologies.
     */
    skip?: number
    distinct?: JobTechnologiesScalarFieldEnum | JobTechnologiesScalarFieldEnum[]
  }


  /**
   * JobTechnologies create
   */
  export type JobTechnologiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * The data needed to create a JobTechnologies.
     */
    data: XOR<JobTechnologiesCreateInput, JobTechnologiesUncheckedCreateInput>
  }


  /**
   * JobTechnologies createMany
   */
  export type JobTechnologiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobTechnologies.
     */
    data: JobTechnologiesCreateManyInput | JobTechnologiesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * JobTechnologies update
   */
  export type JobTechnologiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * The data needed to update a JobTechnologies.
     */
    data: XOR<JobTechnologiesUpdateInput, JobTechnologiesUncheckedUpdateInput>
    /**
     * Choose, which JobTechnologies to update.
     */
    where: JobTechnologiesWhereUniqueInput
  }


  /**
   * JobTechnologies updateMany
   */
  export type JobTechnologiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobTechnologies.
     */
    data: XOR<JobTechnologiesUpdateManyMutationInput, JobTechnologiesUncheckedUpdateManyInput>
    /**
     * Filter which JobTechnologies to update
     */
    where?: JobTechnologiesWhereInput
  }


  /**
   * JobTechnologies upsert
   */
  export type JobTechnologiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * The filter to search for the JobTechnologies to update in case it exists.
     */
    where: JobTechnologiesWhereUniqueInput
    /**
     * In case the JobTechnologies found by the `where` argument doesn't exist, create a new JobTechnologies with this data.
     */
    create: XOR<JobTechnologiesCreateInput, JobTechnologiesUncheckedCreateInput>
    /**
     * In case the JobTechnologies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobTechnologiesUpdateInput, JobTechnologiesUncheckedUpdateInput>
  }


  /**
   * JobTechnologies delete
   */
  export type JobTechnologiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
    /**
     * Filter which JobTechnologies to delete.
     */
    where: JobTechnologiesWhereUniqueInput
  }


  /**
   * JobTechnologies deleteMany
   */
  export type JobTechnologiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobTechnologies to delete
     */
    where?: JobTechnologiesWhereInput
  }


  /**
   * JobTechnologies without action
   */
  export type JobTechnologiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobTechnologies
     */
    select?: JobTechnologiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobTechnologiesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JobScalarFieldEnum: {
    id: 'id',
    jobTitle: 'jobTitle',
    jobLink: 'jobLink',
    companyId: 'companyId',
    jobDescription: 'jobDescription',
    jobPostDate: 'jobPostDate',
    jobAddedDate: 'jobAddedDate',
    numberOfDetailedClicks: 'numberOfDetailedClicks',
    numberOfTimesJobLinkIsClicked: 'numberOfTimesJobLinkIsClicked',
    locationId: 'locationId'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    companyLogoUrl: 'companyLogoUrl',
    companyName: 'companyName'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    countryName: 'countryName',
    countryIcon: 'countryIcon'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const ContinentScalarFieldEnum: {
    id: 'id',
    continentName: 'continentName'
  };

  export type ContinentScalarFieldEnum = (typeof ContinentScalarFieldEnum)[keyof typeof ContinentScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    cityName: 'cityName'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    cityId: 'cityId',
    countryId: 'countryId',
    continentId: 'continentId'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    supabaseId: 'supabaseId',
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'emailAddress',
    isEmailVerified: 'isEmailVerified',
    userStatisticsId: 'userStatisticsId',
    technologyId: 'technologyId',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    roleName: 'roleName'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserStatisticsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId'
  };

  export type UserStatisticsScalarFieldEnum = (typeof UserStatisticsScalarFieldEnum)[keyof typeof UserStatisticsScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    userId: 'userId',
    jobId: 'jobId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    numberOfYears: 'numberOfYears',
    numberOfMonths: 'numberOfMonths'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const TechnologyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    iconUrl: 'iconUrl'
  };

  export type TechnologyScalarFieldEnum = (typeof TechnologyScalarFieldEnum)[keyof typeof TechnologyScalarFieldEnum]


  export const JobTechnologiesScalarFieldEnum: {
    jobId: 'jobId',
    technologyId: 'technologyId'
  };

  export type JobTechnologiesScalarFieldEnum = (typeof JobTechnologiesScalarFieldEnum)[keyof typeof JobTechnologiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    jobTitle?: StringFilter<"Job"> | string
    jobLink?: StringFilter<"Job"> | string
    companyId?: IntFilter<"Job"> | number
    jobDescription?: StringNullableFilter<"Job"> | string | null
    jobPostDate?: DateTimeNullableFilter<"Job"> | Date | string | null
    jobAddedDate?: DateTimeNullableFilter<"Job"> | Date | string | null
    numberOfDetailedClicks?: IntFilter<"Job"> | number
    numberOfTimesJobLinkIsClicked?: IntFilter<"Job"> | number
    locationId?: IntNullableFilter<"Job"> | number | null
    companyName?: XOR<CompanyRelationFilter, CompanyWhereInput>
    technologies?: JobTechnologiesListRelationFilter
    applications?: ApplicationListRelationFilter
    Location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    jobLink?: SortOrder
    companyId?: SortOrder
    jobDescription?: SortOrderInput | SortOrder
    jobPostDate?: SortOrderInput | SortOrder
    jobAddedDate?: SortOrderInput | SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrderInput | SortOrder
    companyName?: CompanyOrderByWithRelationInput
    technologies?: JobTechnologiesOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    Location?: LocationOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    jobTitle?: StringFilter<"Job"> | string
    jobLink?: StringFilter<"Job"> | string
    companyId?: IntFilter<"Job"> | number
    jobDescription?: StringNullableFilter<"Job"> | string | null
    jobPostDate?: DateTimeNullableFilter<"Job"> | Date | string | null
    jobAddedDate?: DateTimeNullableFilter<"Job"> | Date | string | null
    numberOfDetailedClicks?: IntFilter<"Job"> | number
    numberOfTimesJobLinkIsClicked?: IntFilter<"Job"> | number
    locationId?: IntNullableFilter<"Job"> | number | null
    companyName?: XOR<CompanyRelationFilter, CompanyWhereInput>
    technologies?: JobTechnologiesListRelationFilter
    applications?: ApplicationListRelationFilter
    Location?: XOR<LocationNullableRelationFilter, LocationWhereInput> | null
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    jobLink?: SortOrder
    companyId?: SortOrder
    jobDescription?: SortOrderInput | SortOrder
    jobPostDate?: SortOrderInput | SortOrder
    jobAddedDate?: SortOrderInput | SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    jobTitle?: StringWithAggregatesFilter<"Job"> | string
    jobLink?: StringWithAggregatesFilter<"Job"> | string
    companyId?: IntWithAggregatesFilter<"Job"> | number
    jobDescription?: StringNullableWithAggregatesFilter<"Job"> | string | null
    jobPostDate?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    jobAddedDate?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
    numberOfDetailedClicks?: IntWithAggregatesFilter<"Job"> | number
    numberOfTimesJobLinkIsClicked?: IntWithAggregatesFilter<"Job"> | number
    locationId?: IntNullableWithAggregatesFilter<"Job"> | number | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    companyLogoUrl?: StringNullableFilter<"Company"> | string | null
    companyName?: StringFilter<"Company"> | string
    Job?: JobListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    companyLogoUrl?: SortOrderInput | SortOrder
    companyName?: SortOrder
    Job?: JobOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    companyLogoUrl?: StringNullableFilter<"Company"> | string | null
    companyName?: StringFilter<"Company"> | string
    Job?: JobListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    companyLogoUrl?: SortOrderInput | SortOrder
    companyName?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    companyLogoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    companyName?: StringWithAggregatesFilter<"Company"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    countryName?: StringFilter<"Country"> | string
    countryIcon?: StringNullableFilter<"Country"> | string | null
    Location?: LocationListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryIcon?: SortOrderInput | SortOrder
    Location?: LocationOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    countryName?: StringFilter<"Country"> | string
    countryIcon?: StringNullableFilter<"Country"> | string | null
    Location?: LocationListRelationFilter
  }, "id">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryIcon?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    countryName?: StringWithAggregatesFilter<"Country"> | string
    countryIcon?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type ContinentWhereInput = {
    AND?: ContinentWhereInput | ContinentWhereInput[]
    OR?: ContinentWhereInput[]
    NOT?: ContinentWhereInput | ContinentWhereInput[]
    id?: IntFilter<"Continent"> | number
    continentName?: StringFilter<"Continent"> | string
    Location?: LocationListRelationFilter
  }

  export type ContinentOrderByWithRelationInput = {
    id?: SortOrder
    continentName?: SortOrder
    Location?: LocationOrderByRelationAggregateInput
  }

  export type ContinentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContinentWhereInput | ContinentWhereInput[]
    OR?: ContinentWhereInput[]
    NOT?: ContinentWhereInput | ContinentWhereInput[]
    continentName?: StringFilter<"Continent"> | string
    Location?: LocationListRelationFilter
  }, "id">

  export type ContinentOrderByWithAggregationInput = {
    id?: SortOrder
    continentName?: SortOrder
    _count?: ContinentCountOrderByAggregateInput
    _avg?: ContinentAvgOrderByAggregateInput
    _max?: ContinentMaxOrderByAggregateInput
    _min?: ContinentMinOrderByAggregateInput
    _sum?: ContinentSumOrderByAggregateInput
  }

  export type ContinentScalarWhereWithAggregatesInput = {
    AND?: ContinentScalarWhereWithAggregatesInput | ContinentScalarWhereWithAggregatesInput[]
    OR?: ContinentScalarWhereWithAggregatesInput[]
    NOT?: ContinentScalarWhereWithAggregatesInput | ContinentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Continent"> | number
    continentName?: StringWithAggregatesFilter<"Continent"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    cityName?: StringFilter<"City"> | string
    Location?: LocationListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    cityName?: SortOrder
    Location?: LocationOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    cityName?: StringFilter<"City"> | string
    Location?: LocationListRelationFilter
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    cityName?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    cityName?: StringWithAggregatesFilter<"City"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    cityId?: IntNullableFilter<"Location"> | number | null
    countryId?: IntNullableFilter<"Location"> | number | null
    continentId?: IntNullableFilter<"Location"> | number | null
    City?: XOR<CityNullableRelationFilter, CityWhereInput> | null
    Country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
    Continent?: XOR<ContinentNullableRelationFilter, ContinentWhereInput> | null
    job?: JobListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    cityId?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    continentId?: SortOrderInput | SortOrder
    City?: CityOrderByWithRelationInput
    Country?: CountryOrderByWithRelationInput
    Continent?: ContinentOrderByWithRelationInput
    job?: JobOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    cityId?: IntNullableFilter<"Location"> | number | null
    countryId?: IntNullableFilter<"Location"> | number | null
    continentId?: IntNullableFilter<"Location"> | number | null
    City?: XOR<CityNullableRelationFilter, CityWhereInput> | null
    Country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
    Continent?: XOR<ContinentNullableRelationFilter, ContinentWhereInput> | null
    job?: JobListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    cityId?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    continentId?: SortOrderInput | SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    cityId?: IntNullableWithAggregatesFilter<"Location"> | number | null
    countryId?: IntNullableWithAggregatesFilter<"Location"> | number | null
    continentId?: IntNullableWithAggregatesFilter<"Location"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    supabaseId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    emailAddress?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    userStatisticsId?: IntNullableFilter<"User"> | number | null
    technologyId?: IntNullableFilter<"User"> | number | null
    roleId?: IntFilter<"User"> | number
    userStatistics?: XOR<UserStatisticsNullableRelationFilter, UserStatisticsWhereInput> | null
    technologyPreferences?: XOR<TechnologyNullableRelationFilter, TechnologyWhereInput> | null
    professionalExperience?: XOR<ExperienceNullableRelationFilter, ExperienceWhereInput> | null
    applications?: ApplicationListRelationFilter
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    emailAddress?: SortOrder
    isEmailVerified?: SortOrder
    userStatisticsId?: SortOrderInput | SortOrder
    technologyId?: SortOrderInput | SortOrder
    roleId?: SortOrder
    userStatistics?: UserStatisticsOrderByWithRelationInput
    technologyPreferences?: TechnologyOrderByWithRelationInput
    professionalExperience?: ExperienceOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    Role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    supabaseId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    emailAddress?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    userStatisticsId?: IntNullableFilter<"User"> | number | null
    technologyId?: IntNullableFilter<"User"> | number | null
    roleId?: IntFilter<"User"> | number
    userStatistics?: XOR<UserStatisticsNullableRelationFilter, UserStatisticsWhereInput> | null
    technologyPreferences?: XOR<TechnologyNullableRelationFilter, TechnologyWhereInput> | null
    professionalExperience?: XOR<ExperienceNullableRelationFilter, ExperienceWhereInput> | null
    applications?: ApplicationListRelationFilter
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    emailAddress?: SortOrder
    isEmailVerified?: SortOrder
    userStatisticsId?: SortOrderInput | SortOrder
    technologyId?: SortOrderInput | SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    supabaseId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailAddress?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    userStatisticsId?: IntNullableWithAggregatesFilter<"User"> | number | null
    technologyId?: IntNullableWithAggregatesFilter<"User"> | number | null
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    roleName?: StringFilter<"Role"> | string
    User?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    roleName?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleName?: StringFilter<"Role"> | string
    User?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    roleName?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    roleName?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserStatisticsWhereInput = {
    AND?: UserStatisticsWhereInput | UserStatisticsWhereInput[]
    OR?: UserStatisticsWhereInput[]
    NOT?: UserStatisticsWhereInput | UserStatisticsWhereInput[]
    id?: IntFilter<"UserStatistics"> | number
    userId?: IntFilter<"UserStatistics"> | number
    jobId?: IntNullableFilter<"UserStatistics"> | number | null
    User?: UserListRelationFilter
  }

  export type UserStatisticsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type UserStatisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserStatisticsWhereInput | UserStatisticsWhereInput[]
    OR?: UserStatisticsWhereInput[]
    NOT?: UserStatisticsWhereInput | UserStatisticsWhereInput[]
    userId?: IntFilter<"UserStatistics"> | number
    jobId?: IntNullableFilter<"UserStatistics"> | number | null
    User?: UserListRelationFilter
  }, "id">

  export type UserStatisticsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    _count?: UserStatisticsCountOrderByAggregateInput
    _avg?: UserStatisticsAvgOrderByAggregateInput
    _max?: UserStatisticsMaxOrderByAggregateInput
    _min?: UserStatisticsMinOrderByAggregateInput
    _sum?: UserStatisticsSumOrderByAggregateInput
  }

  export type UserStatisticsScalarWhereWithAggregatesInput = {
    AND?: UserStatisticsScalarWhereWithAggregatesInput | UserStatisticsScalarWhereWithAggregatesInput[]
    OR?: UserStatisticsScalarWhereWithAggregatesInput[]
    NOT?: UserStatisticsScalarWhereWithAggregatesInput | UserStatisticsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserStatistics"> | number
    userId?: IntWithAggregatesFilter<"UserStatistics"> | number
    jobId?: IntNullableWithAggregatesFilter<"UserStatistics"> | number | null
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    userId?: IntFilter<"Application"> | number
    jobId?: IntFilter<"Application"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    userId?: SortOrder
    jobId?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    userId_jobId?: ApplicationUserIdJobIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    userId?: IntFilter<"Application"> | number
    jobId?: IntFilter<"Application"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobRelationFilter, JobWhereInput>
  }, "userId_jobId">

  export type ApplicationOrderByWithAggregationInput = {
    userId?: SortOrder
    jobId?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Application"> | number
    jobId?: IntWithAggregatesFilter<"Application"> | number
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    numberOfYears?: IntFilter<"Experience"> | number
    numberOfMonths?: IntFilter<"Experience"> | number
    userId?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
    userId?: UserOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    numberOfYears?: IntFilter<"Experience"> | number
    numberOfMonths?: IntFilter<"Experience"> | number
    userId?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    numberOfYears?: IntWithAggregatesFilter<"Experience"> | number
    numberOfMonths?: IntWithAggregatesFilter<"Experience"> | number
  }

  export type TechnologyWhereInput = {
    AND?: TechnologyWhereInput | TechnologyWhereInput[]
    OR?: TechnologyWhereInput[]
    NOT?: TechnologyWhereInput | TechnologyWhereInput[]
    id?: IntFilter<"Technology"> | number
    name?: StringFilter<"Technology"> | string
    type?: StringNullableFilter<"Technology"> | string | null
    iconUrl?: StringNullableFilter<"Technology"> | string | null
    jobTechnologies?: JobTechnologiesListRelationFilter
    User?: UserListRelationFilter
  }

  export type TechnologyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    jobTechnologies?: JobTechnologiesOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type TechnologyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TechnologyWhereInput | TechnologyWhereInput[]
    OR?: TechnologyWhereInput[]
    NOT?: TechnologyWhereInput | TechnologyWhereInput[]
    name?: StringFilter<"Technology"> | string
    type?: StringNullableFilter<"Technology"> | string | null
    iconUrl?: StringNullableFilter<"Technology"> | string | null
    jobTechnologies?: JobTechnologiesListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type TechnologyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    _count?: TechnologyCountOrderByAggregateInput
    _avg?: TechnologyAvgOrderByAggregateInput
    _max?: TechnologyMaxOrderByAggregateInput
    _min?: TechnologyMinOrderByAggregateInput
    _sum?: TechnologySumOrderByAggregateInput
  }

  export type TechnologyScalarWhereWithAggregatesInput = {
    AND?: TechnologyScalarWhereWithAggregatesInput | TechnologyScalarWhereWithAggregatesInput[]
    OR?: TechnologyScalarWhereWithAggregatesInput[]
    NOT?: TechnologyScalarWhereWithAggregatesInput | TechnologyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Technology"> | number
    name?: StringWithAggregatesFilter<"Technology"> | string
    type?: StringNullableWithAggregatesFilter<"Technology"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"Technology"> | string | null
  }

  export type JobTechnologiesWhereInput = {
    AND?: JobTechnologiesWhereInput | JobTechnologiesWhereInput[]
    OR?: JobTechnologiesWhereInput[]
    NOT?: JobTechnologiesWhereInput | JobTechnologiesWhereInput[]
    jobId?: IntFilter<"JobTechnologies"> | number
    technologyId?: IntFilter<"JobTechnologies"> | number
    Job?: XOR<JobRelationFilter, JobWhereInput>
    technology?: XOR<TechnologyRelationFilter, TechnologyWhereInput>
  }

  export type JobTechnologiesOrderByWithRelationInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
    Job?: JobOrderByWithRelationInput
    technology?: TechnologyOrderByWithRelationInput
  }

  export type JobTechnologiesWhereUniqueInput = Prisma.AtLeast<{
    jobId_technologyId?: JobTechnologiesJobIdTechnologyIdCompoundUniqueInput
    AND?: JobTechnologiesWhereInput | JobTechnologiesWhereInput[]
    OR?: JobTechnologiesWhereInput[]
    NOT?: JobTechnologiesWhereInput | JobTechnologiesWhereInput[]
    jobId?: IntFilter<"JobTechnologies"> | number
    technologyId?: IntFilter<"JobTechnologies"> | number
    Job?: XOR<JobRelationFilter, JobWhereInput>
    technology?: XOR<TechnologyRelationFilter, TechnologyWhereInput>
  }, "jobId_technologyId">

  export type JobTechnologiesOrderByWithAggregationInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
    _count?: JobTechnologiesCountOrderByAggregateInput
    _avg?: JobTechnologiesAvgOrderByAggregateInput
    _max?: JobTechnologiesMaxOrderByAggregateInput
    _min?: JobTechnologiesMinOrderByAggregateInput
    _sum?: JobTechnologiesSumOrderByAggregateInput
  }

  export type JobTechnologiesScalarWhereWithAggregatesInput = {
    AND?: JobTechnologiesScalarWhereWithAggregatesInput | JobTechnologiesScalarWhereWithAggregatesInput[]
    OR?: JobTechnologiesScalarWhereWithAggregatesInput[]
    NOT?: JobTechnologiesScalarWhereWithAggregatesInput | JobTechnologiesScalarWhereWithAggregatesInput[]
    jobId?: IntWithAggregatesFilter<"JobTechnologies"> | number
    technologyId?: IntWithAggregatesFilter<"JobTechnologies"> | number
  }

  export type JobCreateInput = {
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    companyName: CompanyCreateNestedOneWithoutJobInput
    technologies?: JobTechnologiesCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
    Location?: LocationCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId?: number | null
    technologies?: JobTechnologiesUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    companyName?: CompanyUpdateOneRequiredWithoutJobNestedInput
    technologies?: JobTechnologiesUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    Location?: LocationUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    technologies?: JobTechnologiesUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId?: number | null
  }

  export type JobUpdateManyMutationInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompanyCreateInput = {
    companyLogoUrl?: string | null
    companyName: string
    Job?: JobCreateNestedManyWithoutCompanyNameInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    companyLogoUrl?: string | null
    companyName: string
    Job?: JobUncheckedCreateNestedManyWithoutCompanyNameInput
  }

  export type CompanyUpdateInput = {
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    Job?: JobUpdateManyWithoutCompanyNameNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    Job?: JobUncheckedUpdateManyWithoutCompanyNameNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    companyLogoUrl?: string | null
    companyName: string
  }

  export type CompanyUpdateManyMutationInput = {
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    countryName: string
    countryIcon?: string | null
    Location?: LocationCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    countryName: string
    countryIcon?: string | null
    Location?: LocationUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    countryIcon?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: LocationUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryName?: StringFieldUpdateOperationsInput | string
    countryIcon?: NullableStringFieldUpdateOperationsInput | string | null
    Location?: LocationUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    countryName: string
    countryIcon?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    countryIcon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryName?: StringFieldUpdateOperationsInput | string
    countryIcon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContinentCreateInput = {
    continentName: string
    Location?: LocationCreateNestedManyWithoutContinentInput
  }

  export type ContinentUncheckedCreateInput = {
    id?: number
    continentName: string
    Location?: LocationUncheckedCreateNestedManyWithoutContinentInput
  }

  export type ContinentUpdateInput = {
    continentName?: StringFieldUpdateOperationsInput | string
    Location?: LocationUpdateManyWithoutContinentNestedInput
  }

  export type ContinentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentName?: StringFieldUpdateOperationsInput | string
    Location?: LocationUncheckedUpdateManyWithoutContinentNestedInput
  }

  export type ContinentCreateManyInput = {
    id?: number
    continentName: string
  }

  export type ContinentUpdateManyMutationInput = {
    continentName?: StringFieldUpdateOperationsInput | string
  }

  export type ContinentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentName?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    cityName: string
    Location?: LocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    cityName: string
    Location?: LocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    cityName?: StringFieldUpdateOperationsInput | string
    Location?: LocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
    Location?: LocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    cityName: string
  }

  export type CityUpdateManyMutationInput = {
    cityName?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    City?: CityCreateNestedOneWithoutLocationInput
    Country?: CountryCreateNestedOneWithoutLocationInput
    Continent?: ContinentCreateNestedOneWithoutLocationInput
    job?: JobCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    cityId?: number | null
    countryId?: number | null
    continentId?: number | null
    job?: JobUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    City?: CityUpdateOneWithoutLocationNestedInput
    Country?: CountryUpdateOneWithoutLocationNestedInput
    Continent?: ContinentUpdateOneWithoutLocationNestedInput
    job?: JobUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
    job?: JobUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    cityId?: number | null
    countryId?: number | null
    continentId?: number | null
  }

  export type LocationUpdateManyMutationInput = {

  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatistics?: UserStatisticsCreateNestedOneWithoutUserInput
    technologyPreferences?: TechnologyCreateNestedOneWithoutUserInput
    professionalExperience?: ExperienceCreateNestedOneWithoutUserIdInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    Role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    technologyId?: number | null
    roleId: number
    professionalExperience?: ExperienceUncheckedCreateNestedOneWithoutUserIdInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatistics?: UserStatisticsUpdateOneWithoutUserNestedInput
    technologyPreferences?: TechnologyUpdateOneWithoutUserNestedInput
    professionalExperience?: ExperienceUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
    professionalExperience?: ExperienceUncheckedUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    technologyId?: number | null
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    roleName: string
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    roleName: string
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    roleName: string
  }

  export type RoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserStatisticsCreateInput = {
    userId: number
    jobId?: number | null
    User?: UserCreateNestedManyWithoutUserStatisticsInput
  }

  export type UserStatisticsUncheckedCreateInput = {
    id?: number
    userId: number
    jobId?: number | null
    User?: UserUncheckedCreateNestedManyWithoutUserStatisticsInput
  }

  export type UserStatisticsUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateManyWithoutUserStatisticsNestedInput
  }

  export type UserStatisticsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUncheckedUpdateManyWithoutUserStatisticsNestedInput
  }

  export type UserStatisticsCreateManyInput = {
    id?: number
    userId: number
    jobId?: number | null
  }

  export type UserStatisticsUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserStatisticsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationCreateInput = {
    user: UserCreateNestedOneWithoutApplicationsInput
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    userId: number
    jobId: number
  }

  export type ApplicationUpdateInput = {
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateManyInput = {
    userId: number
    jobId: number
  }

  export type ApplicationUpdateManyMutationInput = {

  }

  export type ApplicationUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateInput = {
    numberOfYears: number
    numberOfMonths: number
    userId?: UserCreateNestedOneWithoutProfessionalExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    numberOfYears: number
    numberOfMonths: number
  }

  export type ExperienceUpdateInput = {
    numberOfYears?: IntFieldUpdateOperationsInput | number
    numberOfMonths?: IntFieldUpdateOperationsInput | number
    userId?: UserUpdateOneRequiredWithoutProfessionalExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfYears?: IntFieldUpdateOperationsInput | number
    numberOfMonths?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateManyInput = {
    id?: number
    numberOfYears: number
    numberOfMonths: number
  }

  export type ExperienceUpdateManyMutationInput = {
    numberOfYears?: IntFieldUpdateOperationsInput | number
    numberOfMonths?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numberOfYears?: IntFieldUpdateOperationsInput | number
    numberOfMonths?: IntFieldUpdateOperationsInput | number
  }

  export type TechnologyCreateInput = {
    name: string
    type?: string | null
    iconUrl?: string | null
    jobTechnologies?: JobTechnologiesCreateNestedManyWithoutTechnologyInput
    User?: UserCreateNestedManyWithoutTechnologyPreferencesInput
  }

  export type TechnologyUncheckedCreateInput = {
    id?: number
    name: string
    type?: string | null
    iconUrl?: string | null
    jobTechnologies?: JobTechnologiesUncheckedCreateNestedManyWithoutTechnologyInput
    User?: UserUncheckedCreateNestedManyWithoutTechnologyPreferencesInput
  }

  export type TechnologyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobTechnologies?: JobTechnologiesUpdateManyWithoutTechnologyNestedInput
    User?: UserUpdateManyWithoutTechnologyPreferencesNestedInput
  }

  export type TechnologyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobTechnologies?: JobTechnologiesUncheckedUpdateManyWithoutTechnologyNestedInput
    User?: UserUncheckedUpdateManyWithoutTechnologyPreferencesNestedInput
  }

  export type TechnologyCreateManyInput = {
    id?: number
    name: string
    type?: string | null
    iconUrl?: string | null
  }

  export type TechnologyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnologyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobTechnologiesCreateInput = {
    Job: JobCreateNestedOneWithoutTechnologiesInput
    technology: TechnologyCreateNestedOneWithoutJobTechnologiesInput
  }

  export type JobTechnologiesUncheckedCreateInput = {
    jobId: number
    technologyId: number
  }

  export type JobTechnologiesUpdateInput = {
    Job?: JobUpdateOneRequiredWithoutTechnologiesNestedInput
    technology?: TechnologyUpdateOneRequiredWithoutJobTechnologiesNestedInput
  }

  export type JobTechnologiesUncheckedUpdateInput = {
    jobId?: IntFieldUpdateOperationsInput | number
    technologyId?: IntFieldUpdateOperationsInput | number
  }

  export type JobTechnologiesCreateManyInput = {
    jobId: number
    technologyId: number
  }

  export type JobTechnologiesUpdateManyMutationInput = {

  }

  export type JobTechnologiesUncheckedUpdateManyInput = {
    jobId?: IntFieldUpdateOperationsInput | number
    technologyId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type JobTechnologiesListRelationFilter = {
    every?: JobTechnologiesWhereInput
    some?: JobTechnologiesWhereInput
    none?: JobTechnologiesWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type LocationNullableRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobTechnologiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    jobLink?: SortOrder
    companyId?: SortOrder
    jobDescription?: SortOrder
    jobPostDate?: SortOrder
    jobAddedDate?: SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    jobLink?: SortOrder
    companyId?: SortOrder
    jobDescription?: SortOrder
    jobPostDate?: SortOrder
    jobAddedDate?: SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    jobLink?: SortOrder
    companyId?: SortOrder
    jobDescription?: SortOrder
    jobPostDate?: SortOrder
    jobAddedDate?: SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    numberOfDetailedClicks?: SortOrder
    numberOfTimesJobLinkIsClicked?: SortOrder
    locationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    companyLogoUrl?: SortOrder
    companyName?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    companyLogoUrl?: SortOrder
    companyName?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    companyLogoUrl?: SortOrder
    companyName?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryIcon?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryIcon?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    countryName?: SortOrder
    countryIcon?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContinentCountOrderByAggregateInput = {
    id?: SortOrder
    continentName?: SortOrder
  }

  export type ContinentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContinentMaxOrderByAggregateInput = {
    id?: SortOrder
    continentName?: SortOrder
  }

  export type ContinentMinOrderByAggregateInput = {
    id?: SortOrder
    continentName?: SortOrder
  }

  export type ContinentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    cityName?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CityNullableRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type CountryNullableRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type ContinentNullableRelationFilter = {
    is?: ContinentWhereInput | null
    isNot?: ContinentWhereInput | null
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    countryId?: SortOrder
    continentId?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    countryId?: SortOrder
    continentId?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    countryId?: SortOrder
    continentId?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    countryId?: SortOrder
    continentId?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    cityId?: SortOrder
    countryId?: SortOrder
    continentId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserStatisticsNullableRelationFilter = {
    is?: UserStatisticsWhereInput | null
    isNot?: UserStatisticsWhereInput | null
  }

  export type TechnologyNullableRelationFilter = {
    is?: TechnologyWhereInput | null
    isNot?: TechnologyWhereInput | null
  }

  export type ExperienceNullableRelationFilter = {
    is?: ExperienceWhereInput | null
    isNot?: ExperienceWhereInput | null
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    isEmailVerified?: SortOrder
    userStatisticsId?: SortOrder
    technologyId?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    userStatisticsId?: SortOrder
    technologyId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    isEmailVerified?: SortOrder
    userStatisticsId?: SortOrder
    technologyId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailAddress?: SortOrder
    isEmailVerified?: SortOrder
    userStatisticsId?: SortOrder
    technologyId?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    userStatisticsId?: SortOrder
    technologyId?: SortOrder
    roleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    roleName?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    roleName?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    roleName?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserStatisticsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type UserStatisticsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type UserStatisticsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type UserStatisticsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type UserStatisticsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JobRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ApplicationUserIdJobIdCompoundUniqueInput = {
    userId: number
    jobId: number
  }

  export type ApplicationCountOrderByAggregateInput = {
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    userId?: SortOrder
    jobId?: SortOrder
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfYears?: SortOrder
    numberOfMonths?: SortOrder
  }

  export type TechnologyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    iconUrl?: SortOrder
  }

  export type TechnologyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnologyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    iconUrl?: SortOrder
  }

  export type TechnologyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    iconUrl?: SortOrder
  }

  export type TechnologySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnologyRelationFilter = {
    is?: TechnologyWhereInput
    isNot?: TechnologyWhereInput
  }

  export type JobTechnologiesJobIdTechnologyIdCompoundUniqueInput = {
    jobId: number
    technologyId: number
  }

  export type JobTechnologiesCountOrderByAggregateInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
  }

  export type JobTechnologiesAvgOrderByAggregateInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
  }

  export type JobTechnologiesMaxOrderByAggregateInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
  }

  export type JobTechnologiesMinOrderByAggregateInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
  }

  export type JobTechnologiesSumOrderByAggregateInput = {
    jobId?: SortOrder
    technologyId?: SortOrder
  }

  export type CompanyCreateNestedOneWithoutJobInput = {
    create?: XOR<CompanyCreateWithoutJobInput, CompanyUncheckedCreateWithoutJobInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobInput
    connect?: CompanyWhereUniqueInput
  }

  export type JobTechnologiesCreateNestedManyWithoutJobInput = {
    create?: XOR<JobTechnologiesCreateWithoutJobInput, JobTechnologiesUncheckedCreateWithoutJobInput> | JobTechnologiesCreateWithoutJobInput[] | JobTechnologiesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutJobInput | JobTechnologiesCreateOrConnectWithoutJobInput[]
    createMany?: JobTechnologiesCreateManyJobInputEnvelope
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type LocationCreateNestedOneWithoutJobInput = {
    create?: XOR<LocationCreateWithoutJobInput, LocationUncheckedCreateWithoutJobInput>
    connectOrCreate?: LocationCreateOrConnectWithoutJobInput
    connect?: LocationWhereUniqueInput
  }

  export type JobTechnologiesUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobTechnologiesCreateWithoutJobInput, JobTechnologiesUncheckedCreateWithoutJobInput> | JobTechnologiesCreateWithoutJobInput[] | JobTechnologiesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutJobInput | JobTechnologiesCreateOrConnectWithoutJobInput[]
    createMany?: JobTechnologiesCreateManyJobInputEnvelope
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutJobNestedInput = {
    create?: XOR<CompanyCreateWithoutJobInput, CompanyUncheckedCreateWithoutJobInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutJobInput
    upsert?: CompanyUpsertWithoutJobInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutJobInput, CompanyUpdateWithoutJobInput>, CompanyUncheckedUpdateWithoutJobInput>
  }

  export type JobTechnologiesUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobTechnologiesCreateWithoutJobInput, JobTechnologiesUncheckedCreateWithoutJobInput> | JobTechnologiesCreateWithoutJobInput[] | JobTechnologiesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutJobInput | JobTechnologiesCreateOrConnectWithoutJobInput[]
    upsert?: JobTechnologiesUpsertWithWhereUniqueWithoutJobInput | JobTechnologiesUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobTechnologiesCreateManyJobInputEnvelope
    set?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    disconnect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    delete?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    update?: JobTechnologiesUpdateWithWhereUniqueWithoutJobInput | JobTechnologiesUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobTechnologiesUpdateManyWithWhereWithoutJobInput | JobTechnologiesUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobTechnologiesScalarWhereInput | JobTechnologiesScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type LocationUpdateOneWithoutJobNestedInput = {
    create?: XOR<LocationCreateWithoutJobInput, LocationUncheckedCreateWithoutJobInput>
    connectOrCreate?: LocationCreateOrConnectWithoutJobInput
    upsert?: LocationUpsertWithoutJobInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutJobInput, LocationUpdateWithoutJobInput>, LocationUncheckedUpdateWithoutJobInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JobTechnologiesUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobTechnologiesCreateWithoutJobInput, JobTechnologiesUncheckedCreateWithoutJobInput> | JobTechnologiesCreateWithoutJobInput[] | JobTechnologiesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutJobInput | JobTechnologiesCreateOrConnectWithoutJobInput[]
    upsert?: JobTechnologiesUpsertWithWhereUniqueWithoutJobInput | JobTechnologiesUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobTechnologiesCreateManyJobInputEnvelope
    set?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    disconnect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    delete?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    update?: JobTechnologiesUpdateWithWhereUniqueWithoutJobInput | JobTechnologiesUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobTechnologiesUpdateManyWithWhereWithoutJobInput | JobTechnologiesUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobTechnologiesScalarWhereInput | JobTechnologiesScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobCreateNestedManyWithoutCompanyNameInput = {
    create?: XOR<JobCreateWithoutCompanyNameInput, JobUncheckedCreateWithoutCompanyNameInput> | JobCreateWithoutCompanyNameInput[] | JobUncheckedCreateWithoutCompanyNameInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyNameInput | JobCreateOrConnectWithoutCompanyNameInput[]
    createMany?: JobCreateManyCompanyNameInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutCompanyNameInput = {
    create?: XOR<JobCreateWithoutCompanyNameInput, JobUncheckedCreateWithoutCompanyNameInput> | JobCreateWithoutCompanyNameInput[] | JobUncheckedCreateWithoutCompanyNameInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyNameInput | JobCreateOrConnectWithoutCompanyNameInput[]
    createMany?: JobCreateManyCompanyNameInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUpdateManyWithoutCompanyNameNestedInput = {
    create?: XOR<JobCreateWithoutCompanyNameInput, JobUncheckedCreateWithoutCompanyNameInput> | JobCreateWithoutCompanyNameInput[] | JobUncheckedCreateWithoutCompanyNameInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyNameInput | JobCreateOrConnectWithoutCompanyNameInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCompanyNameInput | JobUpsertWithWhereUniqueWithoutCompanyNameInput[]
    createMany?: JobCreateManyCompanyNameInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCompanyNameInput | JobUpdateWithWhereUniqueWithoutCompanyNameInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCompanyNameInput | JobUpdateManyWithWhereWithoutCompanyNameInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutCompanyNameNestedInput = {
    create?: XOR<JobCreateWithoutCompanyNameInput, JobUncheckedCreateWithoutCompanyNameInput> | JobCreateWithoutCompanyNameInput[] | JobUncheckedCreateWithoutCompanyNameInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCompanyNameInput | JobCreateOrConnectWithoutCompanyNameInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCompanyNameInput | JobUpsertWithWhereUniqueWithoutCompanyNameInput[]
    createMany?: JobCreateManyCompanyNameInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCompanyNameInput | JobUpdateWithWhereUniqueWithoutCompanyNameInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCompanyNameInput | JobUpdateManyWithWhereWithoutCompanyNameInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type LocationCreateNestedManyWithoutCountryInput = {
    create?: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput> | LocationCreateWithoutCountryInput[] | LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCountryInput | LocationCreateOrConnectWithoutCountryInput[]
    createMany?: LocationCreateManyCountryInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput> | LocationCreateWithoutCountryInput[] | LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCountryInput | LocationCreateOrConnectWithoutCountryInput[]
    createMany?: LocationCreateManyCountryInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUpdateManyWithoutCountryNestedInput = {
    create?: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput> | LocationCreateWithoutCountryInput[] | LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCountryInput | LocationCreateOrConnectWithoutCountryInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCountryInput | LocationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: LocationCreateManyCountryInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCountryInput | LocationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCountryInput | LocationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput> | LocationCreateWithoutCountryInput[] | LocationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCountryInput | LocationCreateOrConnectWithoutCountryInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCountryInput | LocationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: LocationCreateManyCountryInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCountryInput | LocationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCountryInput | LocationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationCreateNestedManyWithoutContinentInput = {
    create?: XOR<LocationCreateWithoutContinentInput, LocationUncheckedCreateWithoutContinentInput> | LocationCreateWithoutContinentInput[] | LocationUncheckedCreateWithoutContinentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutContinentInput | LocationCreateOrConnectWithoutContinentInput[]
    createMany?: LocationCreateManyContinentInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutContinentInput = {
    create?: XOR<LocationCreateWithoutContinentInput, LocationUncheckedCreateWithoutContinentInput> | LocationCreateWithoutContinentInput[] | LocationUncheckedCreateWithoutContinentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutContinentInput | LocationCreateOrConnectWithoutContinentInput[]
    createMany?: LocationCreateManyContinentInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUpdateManyWithoutContinentNestedInput = {
    create?: XOR<LocationCreateWithoutContinentInput, LocationUncheckedCreateWithoutContinentInput> | LocationCreateWithoutContinentInput[] | LocationUncheckedCreateWithoutContinentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutContinentInput | LocationCreateOrConnectWithoutContinentInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutContinentInput | LocationUpsertWithWhereUniqueWithoutContinentInput[]
    createMany?: LocationCreateManyContinentInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutContinentInput | LocationUpdateWithWhereUniqueWithoutContinentInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutContinentInput | LocationUpdateManyWithWhereWithoutContinentInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutContinentNestedInput = {
    create?: XOR<LocationCreateWithoutContinentInput, LocationUncheckedCreateWithoutContinentInput> | LocationCreateWithoutContinentInput[] | LocationUncheckedCreateWithoutContinentInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutContinentInput | LocationCreateOrConnectWithoutContinentInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutContinentInput | LocationUpsertWithWhereUniqueWithoutContinentInput[]
    createMany?: LocationCreateManyContinentInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutContinentInput | LocationUpdateWithWhereUniqueWithoutContinentInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutContinentInput | LocationUpdateManyWithWhereWithoutContinentInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationCreateNestedManyWithoutCityInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUpdateManyWithoutCityNestedInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCityInput | LocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCityInput | LocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCityInput | LocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCityInput | LocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCityInput | LocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCityInput | LocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutLocationInput = {
    create?: XOR<CityCreateWithoutLocationInput, CityUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CityCreateOrConnectWithoutLocationInput
    connect?: CityWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutLocationInput = {
    create?: XOR<CountryCreateWithoutLocationInput, CountryUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CountryCreateOrConnectWithoutLocationInput
    connect?: CountryWhereUniqueInput
  }

  export type ContinentCreateNestedOneWithoutLocationInput = {
    create?: XOR<ContinentCreateWithoutLocationInput, ContinentUncheckedCreateWithoutLocationInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutLocationInput
    connect?: ContinentWhereUniqueInput
  }

  export type JobCreateNestedManyWithoutLocationInput = {
    create?: XOR<JobCreateWithoutLocationInput, JobUncheckedCreateWithoutLocationInput> | JobCreateWithoutLocationInput[] | JobUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: JobCreateOrConnectWithoutLocationInput | JobCreateOrConnectWithoutLocationInput[]
    createMany?: JobCreateManyLocationInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<JobCreateWithoutLocationInput, JobUncheckedCreateWithoutLocationInput> | JobCreateWithoutLocationInput[] | JobUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: JobCreateOrConnectWithoutLocationInput | JobCreateOrConnectWithoutLocationInput[]
    createMany?: JobCreateManyLocationInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type CityUpdateOneWithoutLocationNestedInput = {
    create?: XOR<CityCreateWithoutLocationInput, CityUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CityCreateOrConnectWithoutLocationInput
    upsert?: CityUpsertWithoutLocationInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutLocationInput, CityUpdateWithoutLocationInput>, CityUncheckedUpdateWithoutLocationInput>
  }

  export type CountryUpdateOneWithoutLocationNestedInput = {
    create?: XOR<CountryCreateWithoutLocationInput, CountryUncheckedCreateWithoutLocationInput>
    connectOrCreate?: CountryCreateOrConnectWithoutLocationInput
    upsert?: CountryUpsertWithoutLocationInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutLocationInput, CountryUpdateWithoutLocationInput>, CountryUncheckedUpdateWithoutLocationInput>
  }

  export type ContinentUpdateOneWithoutLocationNestedInput = {
    create?: XOR<ContinentCreateWithoutLocationInput, ContinentUncheckedCreateWithoutLocationInput>
    connectOrCreate?: ContinentCreateOrConnectWithoutLocationInput
    upsert?: ContinentUpsertWithoutLocationInput
    disconnect?: ContinentWhereInput | boolean
    delete?: ContinentWhereInput | boolean
    connect?: ContinentWhereUniqueInput
    update?: XOR<XOR<ContinentUpdateToOneWithWhereWithoutLocationInput, ContinentUpdateWithoutLocationInput>, ContinentUncheckedUpdateWithoutLocationInput>
  }

  export type JobUpdateManyWithoutLocationNestedInput = {
    create?: XOR<JobCreateWithoutLocationInput, JobUncheckedCreateWithoutLocationInput> | JobCreateWithoutLocationInput[] | JobUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: JobCreateOrConnectWithoutLocationInput | JobCreateOrConnectWithoutLocationInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutLocationInput | JobUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: JobCreateManyLocationInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutLocationInput | JobUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: JobUpdateManyWithWhereWithoutLocationInput | JobUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<JobCreateWithoutLocationInput, JobUncheckedCreateWithoutLocationInput> | JobCreateWithoutLocationInput[] | JobUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: JobCreateOrConnectWithoutLocationInput | JobCreateOrConnectWithoutLocationInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutLocationInput | JobUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: JobCreateManyLocationInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutLocationInput | JobUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: JobUpdateManyWithWhereWithoutLocationInput | JobUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type UserStatisticsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserStatisticsCreateWithoutUserInput, UserStatisticsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatisticsCreateOrConnectWithoutUserInput
    connect?: UserStatisticsWhereUniqueInput
  }

  export type TechnologyCreateNestedOneWithoutUserInput = {
    create?: XOR<TechnologyCreateWithoutUserInput, TechnologyUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutUserInput
    connect?: TechnologyWhereUniqueInput
  }

  export type ExperienceCreateNestedOneWithoutUserIdInput = {
    create?: XOR<ExperienceCreateWithoutUserIdInput, ExperienceUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserIdInput
    connect?: ExperienceWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type ExperienceUncheckedCreateNestedOneWithoutUserIdInput = {
    create?: XOR<ExperienceCreateWithoutUserIdInput, ExperienceUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserIdInput
    connect?: ExperienceWhereUniqueInput
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserStatisticsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserStatisticsCreateWithoutUserInput, UserStatisticsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserStatisticsCreateOrConnectWithoutUserInput
    upsert?: UserStatisticsUpsertWithoutUserInput
    disconnect?: UserStatisticsWhereInput | boolean
    delete?: UserStatisticsWhereInput | boolean
    connect?: UserStatisticsWhereUniqueInput
    update?: XOR<XOR<UserStatisticsUpdateToOneWithWhereWithoutUserInput, UserStatisticsUpdateWithoutUserInput>, UserStatisticsUncheckedUpdateWithoutUserInput>
  }

  export type TechnologyUpdateOneWithoutUserNestedInput = {
    create?: XOR<TechnologyCreateWithoutUserInput, TechnologyUncheckedCreateWithoutUserInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutUserInput
    upsert?: TechnologyUpsertWithoutUserInput
    disconnect?: TechnologyWhereInput | boolean
    delete?: TechnologyWhereInput | boolean
    connect?: TechnologyWhereUniqueInput
    update?: XOR<XOR<TechnologyUpdateToOneWithWhereWithoutUserInput, TechnologyUpdateWithoutUserInput>, TechnologyUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateOneWithoutUserIdNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserIdInput, ExperienceUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserIdInput
    upsert?: ExperienceUpsertWithoutUserIdInput
    disconnect?: ExperienceWhereInput | boolean
    delete?: ExperienceWhereInput | boolean
    connect?: ExperienceWhereUniqueInput
    update?: XOR<XOR<ExperienceUpdateToOneWithWhereWithoutUserIdInput, ExperienceUpdateWithoutUserIdInput>, ExperienceUncheckedUpdateWithoutUserIdInput>
  }

  export type ApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUncheckedUpdateOneWithoutUserIdNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserIdInput, ExperienceUncheckedCreateWithoutUserIdInput>
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserIdInput
    upsert?: ExperienceUpsertWithoutUserIdInput
    disconnect?: ExperienceWhereInput | boolean
    delete?: ExperienceWhereInput | boolean
    connect?: ExperienceWhereUniqueInput
    update?: XOR<XOR<ExperienceUpdateToOneWithWhereWithoutUserIdInput, ExperienceUpdateWithoutUserIdInput>, ExperienceUncheckedUpdateWithoutUserIdInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutUserStatisticsInput = {
    create?: XOR<UserCreateWithoutUserStatisticsInput, UserUncheckedCreateWithoutUserStatisticsInput> | UserCreateWithoutUserStatisticsInput[] | UserUncheckedCreateWithoutUserStatisticsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatisticsInput | UserCreateOrConnectWithoutUserStatisticsInput[]
    createMany?: UserCreateManyUserStatisticsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserStatisticsInput = {
    create?: XOR<UserCreateWithoutUserStatisticsInput, UserUncheckedCreateWithoutUserStatisticsInput> | UserCreateWithoutUserStatisticsInput[] | UserUncheckedCreateWithoutUserStatisticsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatisticsInput | UserCreateOrConnectWithoutUserStatisticsInput[]
    createMany?: UserCreateManyUserStatisticsInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutUserStatisticsNestedInput = {
    create?: XOR<UserCreateWithoutUserStatisticsInput, UserUncheckedCreateWithoutUserStatisticsInput> | UserCreateWithoutUserStatisticsInput[] | UserUncheckedCreateWithoutUserStatisticsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatisticsInput | UserCreateOrConnectWithoutUserStatisticsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserStatisticsInput | UserUpsertWithWhereUniqueWithoutUserStatisticsInput[]
    createMany?: UserCreateManyUserStatisticsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserStatisticsInput | UserUpdateWithWhereUniqueWithoutUserStatisticsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserStatisticsInput | UserUpdateManyWithWhereWithoutUserStatisticsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUserStatisticsNestedInput = {
    create?: XOR<UserCreateWithoutUserStatisticsInput, UserUncheckedCreateWithoutUserStatisticsInput> | UserCreateWithoutUserStatisticsInput[] | UserUncheckedCreateWithoutUserStatisticsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserStatisticsInput | UserCreateOrConnectWithoutUserStatisticsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserStatisticsInput | UserUpsertWithWhereUniqueWithoutUserStatisticsInput[]
    createMany?: UserCreateManyUserStatisticsInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserStatisticsInput | UserUpdateWithWhereUniqueWithoutUserStatisticsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserStatisticsInput | UserUpdateManyWithWhereWithoutUserStatisticsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserCreateNestedOneWithoutProfessionalExperienceInput = {
    create?: XOR<UserCreateWithoutProfessionalExperienceInput, UserUncheckedCreateWithoutProfessionalExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalExperienceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfessionalExperienceNestedInput = {
    create?: XOR<UserCreateWithoutProfessionalExperienceInput, UserUncheckedCreateWithoutProfessionalExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalExperienceInput
    upsert?: UserUpsertWithoutProfessionalExperienceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessionalExperienceInput, UserUpdateWithoutProfessionalExperienceInput>, UserUncheckedUpdateWithoutProfessionalExperienceInput>
  }

  export type JobTechnologiesCreateNestedManyWithoutTechnologyInput = {
    create?: XOR<JobTechnologiesCreateWithoutTechnologyInput, JobTechnologiesUncheckedCreateWithoutTechnologyInput> | JobTechnologiesCreateWithoutTechnologyInput[] | JobTechnologiesUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutTechnologyInput | JobTechnologiesCreateOrConnectWithoutTechnologyInput[]
    createMany?: JobTechnologiesCreateManyTechnologyInputEnvelope
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTechnologyPreferencesInput = {
    create?: XOR<UserCreateWithoutTechnologyPreferencesInput, UserUncheckedCreateWithoutTechnologyPreferencesInput> | UserCreateWithoutTechnologyPreferencesInput[] | UserUncheckedCreateWithoutTechnologyPreferencesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTechnologyPreferencesInput | UserCreateOrConnectWithoutTechnologyPreferencesInput[]
    createMany?: UserCreateManyTechnologyPreferencesInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JobTechnologiesUncheckedCreateNestedManyWithoutTechnologyInput = {
    create?: XOR<JobTechnologiesCreateWithoutTechnologyInput, JobTechnologiesUncheckedCreateWithoutTechnologyInput> | JobTechnologiesCreateWithoutTechnologyInput[] | JobTechnologiesUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutTechnologyInput | JobTechnologiesCreateOrConnectWithoutTechnologyInput[]
    createMany?: JobTechnologiesCreateManyTechnologyInputEnvelope
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTechnologyPreferencesInput = {
    create?: XOR<UserCreateWithoutTechnologyPreferencesInput, UserUncheckedCreateWithoutTechnologyPreferencesInput> | UserCreateWithoutTechnologyPreferencesInput[] | UserUncheckedCreateWithoutTechnologyPreferencesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTechnologyPreferencesInput | UserCreateOrConnectWithoutTechnologyPreferencesInput[]
    createMany?: UserCreateManyTechnologyPreferencesInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type JobTechnologiesUpdateManyWithoutTechnologyNestedInput = {
    create?: XOR<JobTechnologiesCreateWithoutTechnologyInput, JobTechnologiesUncheckedCreateWithoutTechnologyInput> | JobTechnologiesCreateWithoutTechnologyInput[] | JobTechnologiesUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutTechnologyInput | JobTechnologiesCreateOrConnectWithoutTechnologyInput[]
    upsert?: JobTechnologiesUpsertWithWhereUniqueWithoutTechnologyInput | JobTechnologiesUpsertWithWhereUniqueWithoutTechnologyInput[]
    createMany?: JobTechnologiesCreateManyTechnologyInputEnvelope
    set?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    disconnect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    delete?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    update?: JobTechnologiesUpdateWithWhereUniqueWithoutTechnologyInput | JobTechnologiesUpdateWithWhereUniqueWithoutTechnologyInput[]
    updateMany?: JobTechnologiesUpdateManyWithWhereWithoutTechnologyInput | JobTechnologiesUpdateManyWithWhereWithoutTechnologyInput[]
    deleteMany?: JobTechnologiesScalarWhereInput | JobTechnologiesScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTechnologyPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutTechnologyPreferencesInput, UserUncheckedCreateWithoutTechnologyPreferencesInput> | UserCreateWithoutTechnologyPreferencesInput[] | UserUncheckedCreateWithoutTechnologyPreferencesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTechnologyPreferencesInput | UserCreateOrConnectWithoutTechnologyPreferencesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTechnologyPreferencesInput | UserUpsertWithWhereUniqueWithoutTechnologyPreferencesInput[]
    createMany?: UserCreateManyTechnologyPreferencesInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTechnologyPreferencesInput | UserUpdateWithWhereUniqueWithoutTechnologyPreferencesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTechnologyPreferencesInput | UserUpdateManyWithWhereWithoutTechnologyPreferencesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JobTechnologiesUncheckedUpdateManyWithoutTechnologyNestedInput = {
    create?: XOR<JobTechnologiesCreateWithoutTechnologyInput, JobTechnologiesUncheckedCreateWithoutTechnologyInput> | JobTechnologiesCreateWithoutTechnologyInput[] | JobTechnologiesUncheckedCreateWithoutTechnologyInput[]
    connectOrCreate?: JobTechnologiesCreateOrConnectWithoutTechnologyInput | JobTechnologiesCreateOrConnectWithoutTechnologyInput[]
    upsert?: JobTechnologiesUpsertWithWhereUniqueWithoutTechnologyInput | JobTechnologiesUpsertWithWhereUniqueWithoutTechnologyInput[]
    createMany?: JobTechnologiesCreateManyTechnologyInputEnvelope
    set?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    disconnect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    delete?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    connect?: JobTechnologiesWhereUniqueInput | JobTechnologiesWhereUniqueInput[]
    update?: JobTechnologiesUpdateWithWhereUniqueWithoutTechnologyInput | JobTechnologiesUpdateWithWhereUniqueWithoutTechnologyInput[]
    updateMany?: JobTechnologiesUpdateManyWithWhereWithoutTechnologyInput | JobTechnologiesUpdateManyWithWhereWithoutTechnologyInput[]
    deleteMany?: JobTechnologiesScalarWhereInput | JobTechnologiesScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTechnologyPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutTechnologyPreferencesInput, UserUncheckedCreateWithoutTechnologyPreferencesInput> | UserCreateWithoutTechnologyPreferencesInput[] | UserUncheckedCreateWithoutTechnologyPreferencesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTechnologyPreferencesInput | UserCreateOrConnectWithoutTechnologyPreferencesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTechnologyPreferencesInput | UserUpsertWithWhereUniqueWithoutTechnologyPreferencesInput[]
    createMany?: UserCreateManyTechnologyPreferencesInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTechnologyPreferencesInput | UserUpdateWithWhereUniqueWithoutTechnologyPreferencesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTechnologyPreferencesInput | UserUpdateManyWithWhereWithoutTechnologyPreferencesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutTechnologiesInput = {
    create?: XOR<JobCreateWithoutTechnologiesInput, JobUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: JobCreateOrConnectWithoutTechnologiesInput
    connect?: JobWhereUniqueInput
  }

  export type TechnologyCreateNestedOneWithoutJobTechnologiesInput = {
    create?: XOR<TechnologyCreateWithoutJobTechnologiesInput, TechnologyUncheckedCreateWithoutJobTechnologiesInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutJobTechnologiesInput
    connect?: TechnologyWhereUniqueInput
  }

  export type JobUpdateOneRequiredWithoutTechnologiesNestedInput = {
    create?: XOR<JobCreateWithoutTechnologiesInput, JobUncheckedCreateWithoutTechnologiesInput>
    connectOrCreate?: JobCreateOrConnectWithoutTechnologiesInput
    upsert?: JobUpsertWithoutTechnologiesInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutTechnologiesInput, JobUpdateWithoutTechnologiesInput>, JobUncheckedUpdateWithoutTechnologiesInput>
  }

  export type TechnologyUpdateOneRequiredWithoutJobTechnologiesNestedInput = {
    create?: XOR<TechnologyCreateWithoutJobTechnologiesInput, TechnologyUncheckedCreateWithoutJobTechnologiesInput>
    connectOrCreate?: TechnologyCreateOrConnectWithoutJobTechnologiesInput
    upsert?: TechnologyUpsertWithoutJobTechnologiesInput
    connect?: TechnologyWhereUniqueInput
    update?: XOR<XOR<TechnologyUpdateToOneWithWhereWithoutJobTechnologiesInput, TechnologyUpdateWithoutJobTechnologiesInput>, TechnologyUncheckedUpdateWithoutJobTechnologiesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutJobInput = {
    companyLogoUrl?: string | null
    companyName: string
  }

  export type CompanyUncheckedCreateWithoutJobInput = {
    id?: number
    companyLogoUrl?: string | null
    companyName: string
  }

  export type CompanyCreateOrConnectWithoutJobInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutJobInput, CompanyUncheckedCreateWithoutJobInput>
  }

  export type JobTechnologiesCreateWithoutJobInput = {
    technology: TechnologyCreateNestedOneWithoutJobTechnologiesInput
  }

  export type JobTechnologiesUncheckedCreateWithoutJobInput = {
    technologyId: number
  }

  export type JobTechnologiesCreateOrConnectWithoutJobInput = {
    where: JobTechnologiesWhereUniqueInput
    create: XOR<JobTechnologiesCreateWithoutJobInput, JobTechnologiesUncheckedCreateWithoutJobInput>
  }

  export type JobTechnologiesCreateManyJobInputEnvelope = {
    data: JobTechnologiesCreateManyJobInput | JobTechnologiesCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutJobInput = {
    user: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    userId: number
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutJobInput = {
    City?: CityCreateNestedOneWithoutLocationInput
    Country?: CountryCreateNestedOneWithoutLocationInput
    Continent?: ContinentCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutJobInput = {
    id?: number
    cityId?: number | null
    countryId?: number | null
    continentId?: number | null
  }

  export type LocationCreateOrConnectWithoutJobInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutJobInput, LocationUncheckedCreateWithoutJobInput>
  }

  export type CompanyUpsertWithoutJobInput = {
    update: XOR<CompanyUpdateWithoutJobInput, CompanyUncheckedUpdateWithoutJobInput>
    create: XOR<CompanyCreateWithoutJobInput, CompanyUncheckedCreateWithoutJobInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutJobInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutJobInput, CompanyUncheckedUpdateWithoutJobInput>
  }

  export type CompanyUpdateWithoutJobInput = {
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyLogoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type JobTechnologiesUpsertWithWhereUniqueWithoutJobInput = {
    where: JobTechnologiesWhereUniqueInput
    update: XOR<JobTechnologiesUpdateWithoutJobInput, JobTechnologiesUncheckedUpdateWithoutJobInput>
    create: XOR<JobTechnologiesCreateWithoutJobInput, JobTechnologiesUncheckedCreateWithoutJobInput>
  }

  export type JobTechnologiesUpdateWithWhereUniqueWithoutJobInput = {
    where: JobTechnologiesWhereUniqueInput
    data: XOR<JobTechnologiesUpdateWithoutJobInput, JobTechnologiesUncheckedUpdateWithoutJobInput>
  }

  export type JobTechnologiesUpdateManyWithWhereWithoutJobInput = {
    where: JobTechnologiesScalarWhereInput
    data: XOR<JobTechnologiesUpdateManyMutationInput, JobTechnologiesUncheckedUpdateManyWithoutJobInput>
  }

  export type JobTechnologiesScalarWhereInput = {
    AND?: JobTechnologiesScalarWhereInput | JobTechnologiesScalarWhereInput[]
    OR?: JobTechnologiesScalarWhereInput[]
    NOT?: JobTechnologiesScalarWhereInput | JobTechnologiesScalarWhereInput[]
    jobId?: IntFilter<"JobTechnologies"> | number
    technologyId?: IntFilter<"JobTechnologies"> | number
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    userId?: IntFilter<"Application"> | number
    jobId?: IntFilter<"Application"> | number
  }

  export type LocationUpsertWithoutJobInput = {
    update: XOR<LocationUpdateWithoutJobInput, LocationUncheckedUpdateWithoutJobInput>
    create: XOR<LocationCreateWithoutJobInput, LocationUncheckedCreateWithoutJobInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutJobInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutJobInput, LocationUncheckedUpdateWithoutJobInput>
  }

  export type LocationUpdateWithoutJobInput = {
    City?: CityUpdateOneWithoutLocationNestedInput
    Country?: CountryUpdateOneWithoutLocationNestedInput
    Continent?: ContinentUpdateOneWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JobCreateWithoutCompanyNameInput = {
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    technologies?: JobTechnologiesCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
    Location?: LocationCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutCompanyNameInput = {
    id?: number
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId?: number | null
    technologies?: JobTechnologiesUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutCompanyNameInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutCompanyNameInput, JobUncheckedCreateWithoutCompanyNameInput>
  }

  export type JobCreateManyCompanyNameInputEnvelope = {
    data: JobCreateManyCompanyNameInput | JobCreateManyCompanyNameInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutCompanyNameInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutCompanyNameInput, JobUncheckedUpdateWithoutCompanyNameInput>
    create: XOR<JobCreateWithoutCompanyNameInput, JobUncheckedCreateWithoutCompanyNameInput>
  }

  export type JobUpdateWithWhereUniqueWithoutCompanyNameInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutCompanyNameInput, JobUncheckedUpdateWithoutCompanyNameInput>
  }

  export type JobUpdateManyWithWhereWithoutCompanyNameInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCompanyNameInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    jobTitle?: StringFilter<"Job"> | string
    jobLink?: StringFilter<"Job"> | string
    companyId?: IntFilter<"Job"> | number
    jobDescription?: StringNullableFilter<"Job"> | string | null
    jobPostDate?: DateTimeNullableFilter<"Job"> | Date | string | null
    jobAddedDate?: DateTimeNullableFilter<"Job"> | Date | string | null
    numberOfDetailedClicks?: IntFilter<"Job"> | number
    numberOfTimesJobLinkIsClicked?: IntFilter<"Job"> | number
    locationId?: IntNullableFilter<"Job"> | number | null
  }

  export type LocationCreateWithoutCountryInput = {
    City?: CityCreateNestedOneWithoutLocationInput
    Continent?: ContinentCreateNestedOneWithoutLocationInput
    job?: JobCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutCountryInput = {
    id?: number
    cityId?: number | null
    continentId?: number | null
    job?: JobUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutCountryInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput>
  }

  export type LocationCreateManyCountryInputEnvelope = {
    data: LocationCreateManyCountryInput | LocationCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutCountryInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutCountryInput, LocationUncheckedUpdateWithoutCountryInput>
    create: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutCountryInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutCountryInput, LocationUncheckedUpdateWithoutCountryInput>
  }

  export type LocationUpdateManyWithWhereWithoutCountryInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutCountryInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: IntFilter<"Location"> | number
    cityId?: IntNullableFilter<"Location"> | number | null
    countryId?: IntNullableFilter<"Location"> | number | null
    continentId?: IntNullableFilter<"Location"> | number | null
  }

  export type LocationCreateWithoutContinentInput = {
    City?: CityCreateNestedOneWithoutLocationInput
    Country?: CountryCreateNestedOneWithoutLocationInput
    job?: JobCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutContinentInput = {
    id?: number
    cityId?: number | null
    countryId?: number | null
    job?: JobUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutContinentInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutContinentInput, LocationUncheckedCreateWithoutContinentInput>
  }

  export type LocationCreateManyContinentInputEnvelope = {
    data: LocationCreateManyContinentInput | LocationCreateManyContinentInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutContinentInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutContinentInput, LocationUncheckedUpdateWithoutContinentInput>
    create: XOR<LocationCreateWithoutContinentInput, LocationUncheckedCreateWithoutContinentInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutContinentInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutContinentInput, LocationUncheckedUpdateWithoutContinentInput>
  }

  export type LocationUpdateManyWithWhereWithoutContinentInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutContinentInput>
  }

  export type LocationCreateWithoutCityInput = {
    Country?: CountryCreateNestedOneWithoutLocationInput
    Continent?: ContinentCreateNestedOneWithoutLocationInput
    job?: JobCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutCityInput = {
    id?: number
    countryId?: number | null
    continentId?: number | null
    job?: JobUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutCityInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput>
  }

  export type LocationCreateManyCityInputEnvelope = {
    data: LocationCreateManyCityInput | LocationCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutCityInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutCityInput, LocationUncheckedUpdateWithoutCityInput>
    create: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutCityInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutCityInput, LocationUncheckedUpdateWithoutCityInput>
  }

  export type LocationUpdateManyWithWhereWithoutCityInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutCityInput>
  }

  export type CityCreateWithoutLocationInput = {
    cityName: string
  }

  export type CityUncheckedCreateWithoutLocationInput = {
    id?: number
    cityName: string
  }

  export type CityCreateOrConnectWithoutLocationInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutLocationInput, CityUncheckedCreateWithoutLocationInput>
  }

  export type CountryCreateWithoutLocationInput = {
    countryName: string
    countryIcon?: string | null
  }

  export type CountryUncheckedCreateWithoutLocationInput = {
    id?: number
    countryName: string
    countryIcon?: string | null
  }

  export type CountryCreateOrConnectWithoutLocationInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutLocationInput, CountryUncheckedCreateWithoutLocationInput>
  }

  export type ContinentCreateWithoutLocationInput = {
    continentName: string
  }

  export type ContinentUncheckedCreateWithoutLocationInput = {
    id?: number
    continentName: string
  }

  export type ContinentCreateOrConnectWithoutLocationInput = {
    where: ContinentWhereUniqueInput
    create: XOR<ContinentCreateWithoutLocationInput, ContinentUncheckedCreateWithoutLocationInput>
  }

  export type JobCreateWithoutLocationInput = {
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    companyName: CompanyCreateNestedOneWithoutJobInput
    technologies?: JobTechnologiesCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutLocationInput = {
    id?: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    technologies?: JobTechnologiesUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutLocationInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutLocationInput, JobUncheckedCreateWithoutLocationInput>
  }

  export type JobCreateManyLocationInputEnvelope = {
    data: JobCreateManyLocationInput | JobCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutLocationInput = {
    update: XOR<CityUpdateWithoutLocationInput, CityUncheckedUpdateWithoutLocationInput>
    create: XOR<CityCreateWithoutLocationInput, CityUncheckedCreateWithoutLocationInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutLocationInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutLocationInput, CityUncheckedUpdateWithoutLocationInput>
  }

  export type CityUpdateWithoutLocationInput = {
    cityName?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityName?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpsertWithoutLocationInput = {
    update: XOR<CountryUpdateWithoutLocationInput, CountryUncheckedUpdateWithoutLocationInput>
    create: XOR<CountryCreateWithoutLocationInput, CountryUncheckedCreateWithoutLocationInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutLocationInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutLocationInput, CountryUncheckedUpdateWithoutLocationInput>
  }

  export type CountryUpdateWithoutLocationInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    countryIcon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryName?: StringFieldUpdateOperationsInput | string
    countryIcon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContinentUpsertWithoutLocationInput = {
    update: XOR<ContinentUpdateWithoutLocationInput, ContinentUncheckedUpdateWithoutLocationInput>
    create: XOR<ContinentCreateWithoutLocationInput, ContinentUncheckedCreateWithoutLocationInput>
    where?: ContinentWhereInput
  }

  export type ContinentUpdateToOneWithWhereWithoutLocationInput = {
    where?: ContinentWhereInput
    data: XOR<ContinentUpdateWithoutLocationInput, ContinentUncheckedUpdateWithoutLocationInput>
  }

  export type ContinentUpdateWithoutLocationInput = {
    continentName?: StringFieldUpdateOperationsInput | string
  }

  export type ContinentUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    continentName?: StringFieldUpdateOperationsInput | string
  }

  export type JobUpsertWithWhereUniqueWithoutLocationInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutLocationInput, JobUncheckedUpdateWithoutLocationInput>
    create: XOR<JobCreateWithoutLocationInput, JobUncheckedCreateWithoutLocationInput>
  }

  export type JobUpdateWithWhereUniqueWithoutLocationInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutLocationInput, JobUncheckedUpdateWithoutLocationInput>
  }

  export type JobUpdateManyWithWhereWithoutLocationInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutLocationInput>
  }

  export type UserStatisticsCreateWithoutUserInput = {
    userId: number
    jobId?: number | null
  }

  export type UserStatisticsUncheckedCreateWithoutUserInput = {
    id?: number
    userId: number
    jobId?: number | null
  }

  export type UserStatisticsCreateOrConnectWithoutUserInput = {
    where: UserStatisticsWhereUniqueInput
    create: XOR<UserStatisticsCreateWithoutUserInput, UserStatisticsUncheckedCreateWithoutUserInput>
  }

  export type TechnologyCreateWithoutUserInput = {
    name: string
    type?: string | null
    iconUrl?: string | null
    jobTechnologies?: JobTechnologiesCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type?: string | null
    iconUrl?: string | null
    jobTechnologies?: JobTechnologiesUncheckedCreateNestedManyWithoutTechnologyInput
  }

  export type TechnologyCreateOrConnectWithoutUserInput = {
    where: TechnologyWhereUniqueInput
    create: XOR<TechnologyCreateWithoutUserInput, TechnologyUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateWithoutUserIdInput = {
    numberOfYears: number
    numberOfMonths: number
  }

  export type ExperienceUncheckedCreateWithoutUserIdInput = {
    numberOfYears: number
    numberOfMonths: number
  }

  export type ExperienceCreateOrConnectWithoutUserIdInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserIdInput, ExperienceUncheckedCreateWithoutUserIdInput>
  }

  export type ApplicationCreateWithoutUserInput = {
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    jobId: number
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateManyUserInputEnvelope = {
    data: ApplicationCreateManyUserInput | ApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUserInput = {
    roleName: string
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleName: string
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type UserStatisticsUpsertWithoutUserInput = {
    update: XOR<UserStatisticsUpdateWithoutUserInput, UserStatisticsUncheckedUpdateWithoutUserInput>
    create: XOR<UserStatisticsCreateWithoutUserInput, UserStatisticsUncheckedCreateWithoutUserInput>
    where?: UserStatisticsWhereInput
  }

  export type UserStatisticsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserStatisticsWhereInput
    data: XOR<UserStatisticsUpdateWithoutUserInput, UserStatisticsUncheckedUpdateWithoutUserInput>
  }

  export type UserStatisticsUpdateWithoutUserInput = {
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserStatisticsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TechnologyUpsertWithoutUserInput = {
    update: XOR<TechnologyUpdateWithoutUserInput, TechnologyUncheckedUpdateWithoutUserInput>
    create: XOR<TechnologyCreateWithoutUserInput, TechnologyUncheckedCreateWithoutUserInput>
    where?: TechnologyWhereInput
  }

  export type TechnologyUpdateToOneWithWhereWithoutUserInput = {
    where?: TechnologyWhereInput
    data: XOR<TechnologyUpdateWithoutUserInput, TechnologyUncheckedUpdateWithoutUserInput>
  }

  export type TechnologyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobTechnologies?: JobTechnologiesUpdateManyWithoutTechnologyNestedInput
  }

  export type TechnologyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    jobTechnologies?: JobTechnologiesUncheckedUpdateManyWithoutTechnologyNestedInput
  }

  export type ExperienceUpsertWithoutUserIdInput = {
    update: XOR<ExperienceUpdateWithoutUserIdInput, ExperienceUncheckedUpdateWithoutUserIdInput>
    create: XOR<ExperienceCreateWithoutUserIdInput, ExperienceUncheckedCreateWithoutUserIdInput>
    where?: ExperienceWhereInput
  }

  export type ExperienceUpdateToOneWithWhereWithoutUserIdInput = {
    where?: ExperienceWhereInput
    data: XOR<ExperienceUpdateWithoutUserIdInput, ExperienceUncheckedUpdateWithoutUserIdInput>
  }

  export type ExperienceUpdateWithoutUserIdInput = {
    numberOfYears?: IntFieldUpdateOperationsInput | number
    numberOfMonths?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceUncheckedUpdateWithoutUserIdInput = {
    numberOfYears?: IntFieldUpdateOperationsInput | number
    numberOfMonths?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutRoleInput = {
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatistics?: UserStatisticsCreateNestedOneWithoutUserInput
    technologyPreferences?: TechnologyCreateNestedOneWithoutUserInput
    professionalExperience?: ExperienceCreateNestedOneWithoutUserIdInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    technologyId?: number | null
    professionalExperience?: ExperienceUncheckedCreateNestedOneWithoutUserIdInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    supabaseId?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    emailAddress?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    userStatisticsId?: IntNullableFilter<"User"> | number | null
    technologyId?: IntNullableFilter<"User"> | number | null
    roleId?: IntFilter<"User"> | number
  }

  export type UserCreateWithoutUserStatisticsInput = {
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    technologyPreferences?: TechnologyCreateNestedOneWithoutUserInput
    professionalExperience?: ExperienceCreateNestedOneWithoutUserIdInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    Role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserStatisticsInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    technologyId?: number | null
    roleId: number
    professionalExperience?: ExperienceUncheckedCreateNestedOneWithoutUserIdInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserStatisticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserStatisticsInput, UserUncheckedCreateWithoutUserStatisticsInput>
  }

  export type UserCreateManyUserStatisticsInputEnvelope = {
    data: UserCreateManyUserStatisticsInput | UserCreateManyUserStatisticsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUserStatisticsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserStatisticsInput, UserUncheckedUpdateWithoutUserStatisticsInput>
    create: XOR<UserCreateWithoutUserStatisticsInput, UserUncheckedCreateWithoutUserStatisticsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserStatisticsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserStatisticsInput, UserUncheckedUpdateWithoutUserStatisticsInput>
  }

  export type UserUpdateManyWithWhereWithoutUserStatisticsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserStatisticsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatistics?: UserStatisticsCreateNestedOneWithoutUserInput
    technologyPreferences?: TechnologyCreateNestedOneWithoutUserInput
    professionalExperience?: ExperienceCreateNestedOneWithoutUserIdInput
    Role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    technologyId?: number | null
    roleId: number
    professionalExperience?: ExperienceUncheckedCreateNestedOneWithoutUserIdInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    companyName: CompanyCreateNestedOneWithoutJobInput
    technologies?: JobTechnologiesCreateNestedManyWithoutJobInput
    Location?: LocationCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId?: number | null
    technologies?: JobTechnologiesUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatistics?: UserStatisticsUpdateOneWithoutUserNestedInput
    technologyPreferences?: TechnologyUpdateOneWithoutUserNestedInput
    professionalExperience?: ExperienceUpdateOneWithoutUserIdNestedInput
    Role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
    professionalExperience?: ExperienceUncheckedUpdateOneWithoutUserIdNestedInput
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    companyName?: CompanyUpdateOneRequiredWithoutJobNestedInput
    technologies?: JobTechnologiesUpdateManyWithoutJobNestedInput
    Location?: LocationUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    technologies?: JobTechnologiesUncheckedUpdateManyWithoutJobNestedInput
  }

  export type UserCreateWithoutProfessionalExperienceInput = {
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatistics?: UserStatisticsCreateNestedOneWithoutUserInput
    technologyPreferences?: TechnologyCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    Role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessionalExperienceInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    technologyId?: number | null
    roleId: number
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessionalExperienceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionalExperienceInput, UserUncheckedCreateWithoutProfessionalExperienceInput>
  }

  export type UserUpsertWithoutProfessionalExperienceInput = {
    update: XOR<UserUpdateWithoutProfessionalExperienceInput, UserUncheckedUpdateWithoutProfessionalExperienceInput>
    create: XOR<UserCreateWithoutProfessionalExperienceInput, UserUncheckedCreateWithoutProfessionalExperienceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessionalExperienceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessionalExperienceInput, UserUncheckedUpdateWithoutProfessionalExperienceInput>
  }

  export type UserUpdateWithoutProfessionalExperienceInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatistics?: UserStatisticsUpdateOneWithoutUserNestedInput
    technologyPreferences?: TechnologyUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionalExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobTechnologiesCreateWithoutTechnologyInput = {
    Job: JobCreateNestedOneWithoutTechnologiesInput
  }

  export type JobTechnologiesUncheckedCreateWithoutTechnologyInput = {
    jobId: number
  }

  export type JobTechnologiesCreateOrConnectWithoutTechnologyInput = {
    where: JobTechnologiesWhereUniqueInput
    create: XOR<JobTechnologiesCreateWithoutTechnologyInput, JobTechnologiesUncheckedCreateWithoutTechnologyInput>
  }

  export type JobTechnologiesCreateManyTechnologyInputEnvelope = {
    data: JobTechnologiesCreateManyTechnologyInput | JobTechnologiesCreateManyTechnologyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTechnologyPreferencesInput = {
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatistics?: UserStatisticsCreateNestedOneWithoutUserInput
    professionalExperience?: ExperienceCreateNestedOneWithoutUserIdInput
    applications?: ApplicationCreateNestedManyWithoutUserInput
    Role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTechnologyPreferencesInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    roleId: number
    professionalExperience?: ExperienceUncheckedCreateNestedOneWithoutUserIdInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTechnologyPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechnologyPreferencesInput, UserUncheckedCreateWithoutTechnologyPreferencesInput>
  }

  export type UserCreateManyTechnologyPreferencesInputEnvelope = {
    data: UserCreateManyTechnologyPreferencesInput | UserCreateManyTechnologyPreferencesInput[]
    skipDuplicates?: boolean
  }

  export type JobTechnologiesUpsertWithWhereUniqueWithoutTechnologyInput = {
    where: JobTechnologiesWhereUniqueInput
    update: XOR<JobTechnologiesUpdateWithoutTechnologyInput, JobTechnologiesUncheckedUpdateWithoutTechnologyInput>
    create: XOR<JobTechnologiesCreateWithoutTechnologyInput, JobTechnologiesUncheckedCreateWithoutTechnologyInput>
  }

  export type JobTechnologiesUpdateWithWhereUniqueWithoutTechnologyInput = {
    where: JobTechnologiesWhereUniqueInput
    data: XOR<JobTechnologiesUpdateWithoutTechnologyInput, JobTechnologiesUncheckedUpdateWithoutTechnologyInput>
  }

  export type JobTechnologiesUpdateManyWithWhereWithoutTechnologyInput = {
    where: JobTechnologiesScalarWhereInput
    data: XOR<JobTechnologiesUpdateManyMutationInput, JobTechnologiesUncheckedUpdateManyWithoutTechnologyInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTechnologyPreferencesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTechnologyPreferencesInput, UserUncheckedUpdateWithoutTechnologyPreferencesInput>
    create: XOR<UserCreateWithoutTechnologyPreferencesInput, UserUncheckedCreateWithoutTechnologyPreferencesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTechnologyPreferencesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTechnologyPreferencesInput, UserUncheckedUpdateWithoutTechnologyPreferencesInput>
  }

  export type UserUpdateManyWithWhereWithoutTechnologyPreferencesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTechnologyPreferencesInput>
  }

  export type JobCreateWithoutTechnologiesInput = {
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    companyName: CompanyCreateNestedOneWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
    Location?: LocationCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutTechnologiesInput = {
    id?: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId?: number | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutTechnologiesInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutTechnologiesInput, JobUncheckedCreateWithoutTechnologiesInput>
  }

  export type TechnologyCreateWithoutJobTechnologiesInput = {
    name: string
    type?: string | null
    iconUrl?: string | null
    User?: UserCreateNestedManyWithoutTechnologyPreferencesInput
  }

  export type TechnologyUncheckedCreateWithoutJobTechnologiesInput = {
    id?: number
    name: string
    type?: string | null
    iconUrl?: string | null
    User?: UserUncheckedCreateNestedManyWithoutTechnologyPreferencesInput
  }

  export type TechnologyCreateOrConnectWithoutJobTechnologiesInput = {
    where: TechnologyWhereUniqueInput
    create: XOR<TechnologyCreateWithoutJobTechnologiesInput, TechnologyUncheckedCreateWithoutJobTechnologiesInput>
  }

  export type JobUpsertWithoutTechnologiesInput = {
    update: XOR<JobUpdateWithoutTechnologiesInput, JobUncheckedUpdateWithoutTechnologiesInput>
    create: XOR<JobCreateWithoutTechnologiesInput, JobUncheckedCreateWithoutTechnologiesInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutTechnologiesInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutTechnologiesInput, JobUncheckedUpdateWithoutTechnologiesInput>
  }

  export type JobUpdateWithoutTechnologiesInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    companyName?: CompanyUpdateOneRequiredWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    Location?: LocationUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutTechnologiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type TechnologyUpsertWithoutJobTechnologiesInput = {
    update: XOR<TechnologyUpdateWithoutJobTechnologiesInput, TechnologyUncheckedUpdateWithoutJobTechnologiesInput>
    create: XOR<TechnologyCreateWithoutJobTechnologiesInput, TechnologyUncheckedCreateWithoutJobTechnologiesInput>
    where?: TechnologyWhereInput
  }

  export type TechnologyUpdateToOneWithWhereWithoutJobTechnologiesInput = {
    where?: TechnologyWhereInput
    data: XOR<TechnologyUpdateWithoutJobTechnologiesInput, TechnologyUncheckedUpdateWithoutJobTechnologiesInput>
  }

  export type TechnologyUpdateWithoutJobTechnologiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateManyWithoutTechnologyPreferencesNestedInput
  }

  export type TechnologyUncheckedUpdateWithoutJobTechnologiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUncheckedUpdateManyWithoutTechnologyPreferencesNestedInput
  }

  export type JobTechnologiesCreateManyJobInput = {
    technologyId: number
  }

  export type ApplicationCreateManyJobInput = {
    userId: number
  }

  export type JobTechnologiesUpdateWithoutJobInput = {
    technology?: TechnologyUpdateOneRequiredWithoutJobTechnologiesNestedInput
  }

  export type JobTechnologiesUncheckedUpdateWithoutJobInput = {
    technologyId?: IntFieldUpdateOperationsInput | number
  }

  export type JobTechnologiesUncheckedUpdateManyWithoutJobInput = {
    technologyId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUpdateWithoutJobInput = {
    user?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type JobCreateManyCompanyNameInput = {
    id?: number
    jobTitle: string
    jobLink: string
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
    locationId?: number | null
  }

  export type JobUpdateWithoutCompanyNameInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    technologies?: JobTechnologiesUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    Location?: LocationUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutCompanyNameInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
    technologies?: JobTechnologiesUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutCompanyNameInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    locationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateManyCountryInput = {
    id?: number
    cityId?: number | null
    continentId?: number | null
  }

  export type LocationUpdateWithoutCountryInput = {
    City?: CityUpdateOneWithoutLocationNestedInput
    Continent?: ContinentUpdateOneWithoutLocationNestedInput
    job?: JobUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
    job?: JobUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateManyContinentInput = {
    id?: number
    cityId?: number | null
    countryId?: number | null
  }

  export type LocationUpdateWithoutContinentInput = {
    City?: CityUpdateOneWithoutLocationNestedInput
    Country?: CountryUpdateOneWithoutLocationNestedInput
    job?: JobUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    job?: JobUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutContinentInput = {
    id?: IntFieldUpdateOperationsInput | number
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocationCreateManyCityInput = {
    id?: number
    countryId?: number | null
    continentId?: number | null
  }

  export type LocationUpdateWithoutCityInput = {
    Country?: CountryUpdateOneWithoutLocationNestedInput
    Continent?: ContinentUpdateOneWithoutLocationNestedInput
    job?: JobUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
    job?: JobUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    continentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JobCreateManyLocationInput = {
    id?: number
    jobTitle: string
    jobLink: string
    companyId: number
    jobDescription?: string | null
    jobPostDate?: Date | string | null
    jobAddedDate?: Date | string | null
    numberOfDetailedClicks: number
    numberOfTimesJobLinkIsClicked: number
  }

  export type JobUpdateWithoutLocationInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    companyName?: CompanyUpdateOneRequiredWithoutJobNestedInput
    technologies?: JobTechnologiesUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
    technologies?: JobTechnologiesUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    jobLink?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    jobDescription?: NullableStringFieldUpdateOperationsInput | string | null
    jobPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobAddedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numberOfDetailedClicks?: IntFieldUpdateOperationsInput | number
    numberOfTimesJobLinkIsClicked?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateManyUserInput = {
    jobId: number
  }

  export type ApplicationUpdateWithoutUserInput = {
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    jobId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUncheckedUpdateManyWithoutUserInput = {
    jobId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyRoleInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    technologyId?: number | null
  }

  export type UserUpdateWithoutRoleInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatistics?: UserStatisticsUpdateOneWithoutUserNestedInput
    technologyPreferences?: TechnologyUpdateOneWithoutUserNestedInput
    professionalExperience?: ExperienceUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    professionalExperience?: ExperienceUncheckedUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyUserStatisticsInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    technologyId?: number | null
    roleId: number
  }

  export type UserUpdateWithoutUserStatisticsInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    technologyPreferences?: TechnologyUpdateOneWithoutUserNestedInput
    professionalExperience?: ExperienceUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserStatisticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
    professionalExperience?: ExperienceUncheckedUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserStatisticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    technologyId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type JobTechnologiesCreateManyTechnologyInput = {
    jobId: number
  }

  export type UserCreateManyTechnologyPreferencesInput = {
    id?: number
    supabaseId: string
    firstName?: string | null
    lastName?: string | null
    emailAddress: string
    isEmailVerified: boolean
    userStatisticsId?: number | null
    roleId: number
  }

  export type JobTechnologiesUpdateWithoutTechnologyInput = {
    Job?: JobUpdateOneRequiredWithoutTechnologiesNestedInput
  }

  export type JobTechnologiesUncheckedUpdateWithoutTechnologyInput = {
    jobId?: IntFieldUpdateOperationsInput | number
  }

  export type JobTechnologiesUncheckedUpdateManyWithoutTechnologyInput = {
    jobId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutTechnologyPreferencesInput = {
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatistics?: UserStatisticsUpdateOneWithoutUserNestedInput
    professionalExperience?: ExperienceUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    Role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTechnologyPreferencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
    professionalExperience?: ExperienceUncheckedUpdateOneWithoutUserIdNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTechnologyPreferencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    supabaseId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    emailAddress?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    userStatisticsId?: NullableIntFieldUpdateOperationsInput | number | null
    roleId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use JobCountOutputTypeDefaultArgs instead
     */
    export type JobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContinentCountOutputTypeDefaultArgs instead
     */
    export type ContinentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContinentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStatisticsCountOutputTypeDefaultArgs instead
     */
    export type UserStatisticsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStatisticsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnologyCountOutputTypeDefaultArgs instead
     */
    export type TechnologyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnologyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContinentDefaultArgs instead
     */
    export type ContinentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContinentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityDefaultArgs instead
     */
    export type CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LocationDefaultArgs instead
     */
    export type LocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStatisticsDefaultArgs instead
     */
    export type UserStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStatisticsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationDefaultArgs instead
     */
    export type ApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExperienceDefaultArgs instead
     */
    export type ExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExperienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TechnologyDefaultArgs instead
     */
    export type TechnologyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TechnologyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobTechnologiesDefaultArgs instead
     */
    export type JobTechnologiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobTechnologiesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}