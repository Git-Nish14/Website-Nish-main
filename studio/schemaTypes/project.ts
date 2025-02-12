export default  {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            title: "Alt Text",
            type: "string",
          },
        ],
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "link",
        title: "Project Link",
        type: "url",
        validation: (Rule:any) => Rule.required().uri({
          scheme: ["http", "https"],
        }),
      },
    ],
  };
  