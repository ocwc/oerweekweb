/* global selectChoose*/
import { test } from 'qunit';
import moduleForAcceptance from 'oerweekweb/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | submit');

test('visiting /submit', function(assert) {
  visit('/submit');

  const data = {
    firstname: 'Mike',
    lastname: 'Smith',
    email: 'mike.smith@example.com',
    country: 'United States',
    city: 'San Francisco, CA',
    description: 'Event description',
    directions: 'http://maps.google.com/123',
    language: 'English',
    title: 'Event Title'
  };

  click('button:contains("Next Page")');

  fillIn('.firstname input', data.firstname);
  fillIn('.lastname input', data.lastname);
  fillIn('.email input', data.email);
  selectChoose('.country', data.country);
  fillIn('.city input', data.city);
  click('.event_local');

  click('button:contains("Next Page")');

  click('.workshop');
  fillIn('.title input', data.title);
  fillIn('.description textarea', data.description);
  fillIn('.directions input', data.directions);

  click('.archive input:first');
  selectChoose('.language', data.language);
  click('.is_primary input');

  click('button:contains("Submit Event")');

  andThen(function() {
    assert.equal(currentURL(), '/submit');
    assert.equal(find('h2:first').text(), 'Submitted!');
  });
});
