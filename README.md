# Shaper eLearning Content

A vanilla [Sveltia CMS](https://sveltiacms.app/) project used by Shaper’s eLearning content creation team to manage learning content for our Moodle LMS.

The project is hosted on GitHub Pages, with content and configuration managed through GitHub.

**Repository:** https://github.com/The-DigitalAcademy/shaper-elearning-content

## Accessing Sveltia CMS

To authenticate with the CMS, create a GitHub fine-grained personal access token (PAT) with restricted access to this repository.

### Creating a Fine-Grained Token

1. Open [GitHub Fine-Grained Personal Access Tokens](https://github.com/settings/personal-access-tokens/new).
2. Enter a descriptive token name, such as `Shaper eLearning CMS`.
3. Set the resource owner to **The-DigitalAcademy**.
4. Under **Repository access**, select **Only select repositories** and choose `shaper-elearning-content`.
5. Under **Repository permissions**, configure the following permissions:

   | Permission | Access |
   |---|---|
   | Contents | Read and write |
   | Metadata | Read-only (default) |

6. Leave all other permissions unset.
7. Set an appropriate expiration date and generate the token.
8. Copy the token and store it securely. GitHub displays the token only when it is generated.

> **Important:** The token should only have access to the `shaper-elearning-content` repository. Do not share it publicly or commit it to the repository.

### Signing In

1. Open the Sveltia CMS admin interface at https://the-digitalacademy.github.io/shaper-elearning-content/admin.
2. Select Sign In using GitHub Access Token, and provide the generated token when prompted.
3. Once authenticated, use the CMS to create and edit eLearning content. Changes are committed to the configured GitHub repository.

## Security Notes

- Create a separate token for each user where practical.
- Never share tokens through source code, commits, or public channels.
- Revoke or regenerate tokens when access is no longer required or a token is compromised.
- The token grants permission to read and modify repository contents; it does not grant administrative access to the repository.

## References

- [Sveltia CMS — GitHub Backend](https://sveltiacms.app/en/docs/backends/github)
- [GitHub — Managing Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
