import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-50-метеостанция', 'Unit | Serializer | i-i-s-50-метеостанция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-50-метеостанция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-50-город',
    'model:i-i-s-50-здание',
    'model:i-i-s-50-метеостанция',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
