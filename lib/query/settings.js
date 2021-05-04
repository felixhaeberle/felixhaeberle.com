import { getSanityContent } from '../api'

export async function getSiteSettings(){
  const allSettingsData = await getSanityContent({
    query: `
      query allSettingsData {
        allSiteSettings {
          _id,
          title,
          site_title,
          frontpage_text,
          currently,
          legal_links {
            text,
            link
          },
          social_links {
            text,
            link
          },
          cards {
            text_cards {
              card_header_text,
              card_text,
              card_description
            }
          },
          cv {
            professional_experience {
              title,
              place,
              placeLink,
              location,
              startDate,
              endDate,
              ongoing,
              text
            }
            education {
              title,
              place,
              placeLink,
              location,
              startDate,
              endDate,
              ongoing,
              text
            }
            open_source {
              title,
              place,
              placeLink,
              location,
              startDate,
              endDate,
              ongoing,
              text
            }
          }
        }
      }
    `,
  });

  return allSettingsData.allSiteSettings.map((setting) => ({
    _id: setting._id,
    title: setting.title,
    site_title: setting.site_title,
    frontpage_text: setting.frontpage_text,
    currently: setting.currently,
    legal_links: setting.legal_links,
    social_links: setting.social_links,
    cards: setting.cards[0].text_cards,
    cv: setting.cv[0]
  }))[0];
}