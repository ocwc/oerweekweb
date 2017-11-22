import $ from 'jquery';
import { keys } from '@ember/polyfills';
import Controller from '@ember/controller';

export default Controller.extend({
  countries: ['Andorra', 'United Arab Emirates', 'Afghanistan', 'Antigua and Barbuda', 'Anguilla', 'Albania', 'Armenia', 'Angola', 'Antarctica', 'Argentina', 'American Samoa', 'Austria', 'Australia', 'Aruba', 'Åland', 'Azerbaijan', 'Bosnia and Herzegovina', 'Barbados', 'Bangladesh', 'Belgium', 'Burkina Faso', 'Bulgaria', 'Bahrain', 'Burundi', 'Benin', 'Saint Barthélemy', 'Bermuda', 'Brunei', 'Bolivia', 'Bonaire', 'Brazil', 'Bahamas', 'Bhutan', 'Bouvet Island', 'Botswana', 'Belarus', 'Belize', 'Canada', 'Cocos [Keeling] Islands', 'Democratic Republic of the Congo', 'Central African Republic', 'Republic of the Congo', 'Switzerland', 'Ivory Coast', 'Cook Islands', 'Chile', 'Cameroon', 'China', 'Colombia', 'Costa Rica', '', 'Cuba', 'Cape Verde', 'Curacao', 'Christmas Island', 'Cyprus', 'Czechia', 'Germany', 'Djibouti', 'Denmark', 'Dominica', 'Dominican Republic', 'Algeria', 'Ecuador', 'Estonia', 'Egypt', 'Western Sahara', 'Eritrea', 'Spain', 'Ethiopia', 'Finland', 'Fiji', 'Falkland Islands', 'Micronesia', 'Faroe Islands', 'France', 'Gabon', 'United Kingdom', 'Grenada', 'Georgia', 'French Guiana', 'Guernsey', 'Ghana', 'Gibraltar', 'Greenland', 'Gambia', 'Guinea', 'Guadeloupe', 'Equatorial Guinea', 'Greece', 'South Georgia and the South Sandwich Islands', 'Guatemala', 'Guam', 'Guinea-Bissau', 'Guyana', 'Hong Kong', 'Heard Island and McDonald Islands', 'Honduras', 'Croatia', 'Haiti', 'Hungary', 'Indonesia', 'Ireland', 'Israel', 'Isle of Man', 'India', 'British Indian Ocean Territory', 'Iraq', 'Iran', 'Iceland', 'Italy', 'Jersey', 'Jamaica', 'Jordan', 'Japan', 'Kenya', 'Kyrgyzstan', 'Cambodia', 'Kiribati', 'Comoros', 'Saint Kitts and Nevis', 'North Korea', 'South Korea', 'Kuwait', 'Cayman Islands', 'Kazakhstan', 'Laos', 'Lebanon', 'Saint Lucia', 'Liechtenstein', 'Sri Lanka', 'Liberia', 'Lesotho', 'Lithuania', 'Luxembourg', 'Latvia', 'Libya', 'Morocco', 'Monaco', 'Moldova', 'Montenegro', 'Saint Martin', 'Madagascar', 'Marshall Islands', 'Macedonia', 'Mali', 'Myanmar [Burma]', 'Mongolia', 'Macao', 'Northern Mariana Islands', 'Martinique', 'Mauritania', 'Montserrat', 'Malta', 'Mauritius', 'Maldives', 'Malawi', 'Mexico', 'Malaysia', 'Mozambique', 'Namibia', 'New Caledonia', 'Niger', 'Norfolk Island', 'Nigeria', 'Nicaragua', 'Netherlands', 'Norway', 'Nepal', 'Nauru', 'Niue', 'New Zealand', 'Oman', 'Panama', 'Peru', 'French Polynesia', 'Papua New Guinea', 'Philippines', 'Pakistan', 'Poland', 'Saint Pierre and Miquelon', 'Pitcairn Islands', 'Puerto Rico', 'Palestine', 'Portugal', 'Palau', 'Paraguay', 'Qatar', 'Réunion', 'Romania', 'Serbia', 'Russia', 'Rwanda', 'Saudi Arabia', 'Solomon Islands', 'Seychelles', 'Sudan', 'Sweden', 'Singapore', 'Saint Helena', 'Slovenia', 'Svalbard and Jan Mayen', 'Slovakia', 'Sierra Leone', 'San Marino', 'Senegal', 'Somalia', 'Suriname', 'South Sudan', 'São Tomé and Príncipe', 'El Salvador', 'Sint Maarten', 'Syria', 'Swaziland', 'Turks and Caicos Islands', 'Chad', 'French Southern Territories', 'Togo', 'Thailand', 'Tajikistan', 'Tokelau', 'East Timor', 'Turkmenistan', 'Tunisia', 'Tonga', 'Turkey', 'Trinidad and Tobago', 'Tuvalu', 'Taiwan', 'Tanzania', 'Ukraine', 'Uganda', 'U.S. Minor Outlying Islands', 'United States', 'Uruguay', 'Uzbekistan', 'Vatican City', 'Saint Vincent and the Grenadines', 'Venezuela', 'British Virgin Islands', 'U.S. Virgin Islands', 'Vietnam', 'Vanuatu', 'Wallis and Futuna', 'Samoa', 'Kosovo', 'Yemen', 'Mayotte', 'South Africa', 'Zambia', 'Zimbabwe'],
  languages: ['Albanian', 'Arabic', 'Armenian', 'Basque', 'Bosnian', 'Bulgarian', 'Catalan', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Finnish', 'French', 'German', 'Greek', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Korean', 'Kurdish', 'Latin', 'Latvian', 'Lithuanian', 'Macedonian', 'Malay', 'Maltese', 'Moldavian', 'Mongolian', 'Nepali', 'Norwegian Bokmål', 'Persian', 'Polish', 'Portuguese, Brazil', 'Portuguese, Portugal', 'Punjabi', 'Quechua', 'Romanian', 'Russian', 'Serbian', 'Slavic', 'Slovak', 'Slovenian', 'Somali', 'Spanish', 'Swedish', 'Tamil', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Uzbek', 'Vietnamese', 'Welsh', 'Yiddish', 'Zulu'],
  timezone: '',
  licenses: ['CC-BY', 'CC-BY-SA', 'CC-BY-NC', 'CC-BY-NC-SA', 'Freely accessible', 'Other'],
  didValidate: false,

  extraPickadateOptions: {},
  wizard: {
    'intro': false,
    'basic': false,
    'event_local': false,
    'event_online': false,
    'resource_project': false,
    'submitted': false,
  },

  // wizard: {
  //   'intro': true,
  //   'basic': true,
  //   'event_local': false,
  //   'event_online': false,
  //   'resource_project': false,
  //   'submitted': false,
  // },

  wizard_fields: {
    // 'basic': ['firstname', 'contributiontype'],
    // 'resource_project': ['title'],
    // 'event_local': ['title', 'eventother'],

    'basic': ['firstname', 'lastname', 'email', 'country', 'city', 'contributiontype'],
    'event_local': ['title', 'description', 'date', 'time', 'directions', 'archive', 'language', 'eventother'],
    'event_online': ['title', 'description', 'date', 'time', 'link', 'archive', 'language', 'eventother'],
    'resource_project': ['title', 'description', 'license', 'link', 'language'],
  },

  resetData(controller) {
    if ( this.get('wizard').intro ) {
      controller.set('model', controller.get('model'));

      keys(this.get('wizard')).map((prop) => {
        this.set(`wizard.${prop}`, false);
      });
    }
  },

  actions: {
    nextPage(prop, submit) {
      if ( prop === 'intro' ) {
        this.set(`wizard.${prop}`, true);
      } else {
        var model = this.get('model');

        model.validate({ 'on': this.get(`wizard_fields.${prop}`) }).then(({
          model,
          validations
        }) => {
          if (validations.get('isValid')) {
            this.set(`wizard.${prop}`, true);

            if ( submit ) {
              this.set('wizard.submitted', true);
              this.get('model').save();
            }
            this.set('didValidate', false);
          } else {
            this.set('didValidate', true);
          }

          $(window).scrollTop(0);
        });
      }
    },

    resetSubmission() {
      let oldModel = this.get('model');

      this.set('model', this.store.createRecord('submission', {
               'datetime': new Date(2017, 2, 27) // also update date in route.model()
               }));

      this.set('model.firstname', oldModel.get('firstname'));
      this.set('model.lastname', oldModel.get('lastname'));
      this.set('model.institution', oldModel.get('institution'));
      this.set('model.institutionurl', oldModel.get('institutionurl'));
      this.set('model.email', oldModel.get('email'));
      this.set('model.country', oldModel.get('country'));
      this.set('model.city', oldModel.get('city'));

      keys(this.get('wizard')).map((prop) => {
        this.set(`wizard.${prop}`, false);
      });

    },

    updateDatetime(val) {
      this.set('model.datetime', val);
      this.set('timezone', 'GMT' + moment(val).format('Z'));
    },
  }
});
