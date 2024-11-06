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
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'blockContent',
    }),
    defineField({
      name: 'maxSpeed',
      title: 'Max Speed',
      type: 'string',
    }),
    defineField({
      name: 'maxPower',
      title: 'Max Power',
      type: 'string',
    }),
    defineField({
      name: 'cargoBoxDimension',
      title: 'Cargo Box Dimension',
      type: 'string',
    }),
    defineField({
      name: 'rangeCharge',
      title: 'Range/Charge',
      type: 'string',
    }),
    defineField({
      name: 'groundClearance',
      title: 'Ground Clearance',
      type: 'string',
    }),
    defineField({
      name: 'gradeability',
      title: 'Gradeability',
      type: 'string',
    }),
    defineField({
      name: 'gvw',
      title: 'GVW',
      type: 'string',
    }),
    defineField({
      name: 'batteryCapacity',
      title: 'Battery Capacity',
      type: 'string',
    }),
    defineField({
      name: 'batteryChargingTime',
      title: 'Battery Charging Time',
      type: 'string',
    }),
    defineField({
      name: 'instrumentCluster',
      title: 'Instrument Cluster',
      type: 'string',
    }),
    defineField({
      name: 'tyreSize',
      title: 'Tyre Size',
      type: 'string',
    }),
    defineField({
      name: 'brake',
      title: 'Brake',
      type: 'string',
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
