// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {}
});
var About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about/.mdx",
  contentType: "mdx",
  fields: {
    content: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DXKRWMQD.mjs.map
