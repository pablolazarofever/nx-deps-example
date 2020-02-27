module.exports = {
  name: 'fakeapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fakeapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
