
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.JobScalarFieldEnum = {
  id: 'id',
  jobTitle: 'jobTitle',
  jobLink: 'jobLink',
  companyId: 'companyId',
  jobDescription: 'jobDescription',
  jobPostDate: 'jobPostDate',
  jobAddedDate: 'jobAddedDate',
  numberOfDetailedClicks: 'numberOfDetailedClicks',
  numberOfTimesJobLinkIsClicked: 'numberOfTimesJobLinkIsClicked',
  LocationBackupString: 'LocationBackupString',
  locationId: 'locationId',
  source: 'source',
  sourceUniqueIdentifier: 'sourceUniqueIdentifier'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  companyLogoUrl: 'companyLogoUrl',
  companyName: 'companyName'
};

exports.Prisma.CountryScalarFieldEnum = {
  id: 'id',
  countryName: 'countryName',
  countryIcon: 'countryIcon'
};

exports.Prisma.ContinentScalarFieldEnum = {
  id: 'id',
  continentName: 'continentName'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  cityName: 'cityName'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  cityId: 'cityId',
  countryId: 'countryId',
  continentId: 'continentId'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  roleName: 'roleName'
};

exports.Prisma.UserStatisticsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  jobId: 'jobId'
};

exports.Prisma.ApplicationScalarFieldEnum = {
  userId: 'userId',
  jobId: 'jobId'
};

exports.Prisma.ExperienceScalarFieldEnum = {
  id: 'id',
  numberOfYears: 'numberOfYears',
  numberOfMonths: 'numberOfMonths'
};

exports.Prisma.TechnologyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  iconUrl: 'iconUrl'
};

exports.Prisma.JobTechnologiesScalarFieldEnum = {
  jobId: 'jobId',
  technologyId: 'technologyId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
