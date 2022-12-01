import client from "@sanity/client"

export default client({
   projectId: "bwl4sj3p",
   dataset: "production-youtubeblog",
   useCdn: true,
   apiVersion: "2022-11-30",
   ignoreBrowserTokenWarning: true,
})