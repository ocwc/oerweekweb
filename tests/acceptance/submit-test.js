import { test } from 'qunit';
import moduleForAcceptance from 'oerweekweb/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | submit');

test('visiting /submit', function(assert) {
  visit('/submit');

  const data = {
    firstname: 'Mike',
    lastname: 'Smith',
    email: 'mike.smith@example.com',
    country: 'United States'
  }

  click('button:contains("Next Page")');

  fillIn('.firstname input', data.firstname);
  fillIn('input[name="lastname"]', data.lastname);
  fillIn('input[name="email"]', data.email);
  selectChoose('.country', data.country);

  andThen(function() {
    assert.equal(currentURL(), '/submit');
  });
});
