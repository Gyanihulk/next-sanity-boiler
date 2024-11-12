import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      validation: (Rule) => Rule.required(),
      type: 'number',
    }),
    defineField({
      name: 'discountedPrice',
      title: 'Discounted Price',
       validation: (Rule) => Rule.required(),
      type: 'number',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      validation: (Rule) => Rule.required(),
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      validation: (Rule) => Rule.required(),
      type: 'blockContent',
    }),
    defineField({
      name: 'maxSpeed',
      title: 'Max Speed',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'maxPower',
      title: 'Max Power',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'cargoBoxDimension',
      title: 'Cargo Box Dimension',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'rangeCharge',
      title: 'Range/Charge',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'groundClearance',
      title: 'Ground Clearance',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'gradeability',
      title: 'Gradeability',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'gvw',
      title: 'GVW',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'batteryCapacity',
      title: 'Battery Capacity',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'batteryChargingTime',
      title: 'Battery Charging Time',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'instrumentCluster',
      title: 'Instrument Cluster',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'tyreSize',
      title: 'Tyre Size',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'brake',
      title: 'Brake',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
