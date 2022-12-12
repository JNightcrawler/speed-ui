// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  speedApiUpload:'http://localhost:8080/uploadFile',
  // speedApiDownload:'https://8080-cs-8f24dc1a-570a-4029-8432-58aa555b2b2b.cs-asia-southeast1-yelo.cloudshell.dev/downloadFile/50MB.zip'
 //                 https://8080-cs-8f24dc1a-570a-4029-8432-58aa555b2b2b.cs-asia-southeast1-yelo.cloudshell.dev/
  speedApiDownload:'http://localhost:8080/downloadFile/50MB.zip'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
