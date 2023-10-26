/* Fuction should return the value returned by promise */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
