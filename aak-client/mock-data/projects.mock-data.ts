import { SingleProject } from '@models/project.model';

export const ProjectsMockData: SingleProject[] = [
  {
    id: 1,
    title: 'First Post!!',
    slug: 'wow',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut odio tempor, auctor tellus id, rutrum est. Donec purus massa, blandit eu efficitur nec, sodales suscipit libero. Integer varius magna ornare tortor consectetur sagittis. Aliquam nulla massa, imperdiet ac sem nec, molestie volutpat lorem. Curabitur quam urna, bibendum dictum lacinia at, congue in tellus. Praesent sed dolor sed dolor feugiat auctor. Integer cursus ultricies magna. Nam quis tempor tortor, eget cursus dui. Nam volutpat, arcu eu molestie vehicula, dolor turpis vestibulum libero, et dignissim ipsum odio eu ipsum. Vestibulum elementum tincidunt viverra. Nam elementum ex vitae orci mattis, quis ultrices mauris venenatis. Sed ut ullamcorper velit. Nullam ac eleifend enim. Suspendisse consectetur libero augue, id dignissim diam volutpat et. Aliquam ac dapibus ante, a consectetur turpis. Curabitur in vulputate eros. Praesent posuere, nunc ut bibendum semper, enim metus scelerisque ipsum, ac tempus neque ligula eget dui. Vestibulum a lacus dolor. Vivamus eget malesuada justo. Pellentesque sit amet dignissim lectus, eu ultrices diam. Nunc volutpat a ante eu placerat. Praesent vestibulum vehicula quam, quis condimentum ligula ornare ut. Aenean laoreet eros mauris, rutrum ultrices enim mollis id. Nulla tincidunt, turpis vitae egestas facilisis, magna metus sodales dolor, nec tincidunt ligula ipsum eu ligula. Etiam placerat tincidunt tellus, et pulvinar enim luctus sed.',
    published_at: '2020-12-28T19:46:55.914Z',
    created_at: '2020-12-28T19:46:19.193Z',
    updated_at: '2021-01-02T20:58:35.687Z',
    image: {
      id: 1,
      name: 'camaro at newark.jpg',
      alternativeText: '',
      caption: '',
      width: 639,
      height: 479,
      formats: {
        thumbnail: {
          name: 'thumbnail_camaro at newark.jpg',
          hash: 'thumbnail_camaro_at_newark_66a0558cb0',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 208,
          height: 156,
          size: 11.87,
          path: null,
          url: '/uploads/thumbnail_camaro_at_newark_66a0558cb0.jpg',
        },
        small: {
          name: 'small_camaro at newark.jpg',
          hash: 'small_camaro_at_newark_66a0558cb0',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 500,
          height: 375,
          size: 57.91,
          path: null,
          url: '/uploads/small_camaro_at_newark_66a0558cb0.jpg',
        },
        large: {
          name: 'large_camaro at newark.jpg',
          hash: 'large_camaro_at_newark_66a0558cb0',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 500,
          height: 375,
          size: 57.91,
          path: null,
          url: '/uploads/large_camaro_at_newark_66a0558cb0.jpg',
        },
      },
      hash: 'camaro_at_newark_66a0558cb0',
      ext: '.jpg',
      mime: 'image/jpeg',
      size: 93.49,
      url: '/uploads/camaro_at_newark_66a0558cb0.jpg',
      previewUrl: null,
      provider: 'local',
      provider_metadata: null,
      created_at: '2021-01-02T20:58:15.625Z',
      updated_at: '2021-01-02T20:58:15.636Z',
    },
  },
];
