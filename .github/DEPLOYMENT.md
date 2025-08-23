# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to both GitHub Pages locations using GitHub Actions:
1. **This repository's GitHub Pages**: `https://jounaidayoub.github.io/ayooub.me`
2. **External repository**: `https://jounaidayoub.github.io` (main portfolio site)

## Required Setup

### Personal Access Token (PAT)

The deployment workflow requires a Personal Access Token with appropriate permissions to push to the `jounaidayoub.github.io` repository.

#### Creating a PAT:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Set the following:
   - **Note**: "Portfolio deployment to jounaidayoub.github.io"
   - **Expiration**: Set according to your preference (recommend 1 year)
   - **Scopes**: Select `repo` (Full control of private repositories)

#### Adding the PAT to Repository Secrets:

1. Go to this repository's Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `GH_TOKEN`
4. Value: Paste the PAT you generated
5. Click "Add secret"

## How the Deployment Works

1. **Trigger**: Workflow runs on every push to the `main` branch
2. **Build**: The application is built using `npm run build`
3. **Dual Deploy**: 
   - Built files are deployed to this repository's GitHub Pages using the peaceiris action
   - Built files are also pushed to the `jounaidayoub.github.io` repository for the main site
4. **Result**: The portfolio is available at both locations

## Troubleshooting

### Error: "GH_TOKEN secret is not set"
- Make sure you've added the `GH_TOKEN` secret as described above
- Verify the secret name is exactly `GH_TOKEN`

### Error: "Permission denied"
- Check that your PAT has `repo` scope permissions
- Verify that the PAT hasn't expired
- Make sure the PAT was created by a user with write access to `jounaidayoub.github.io`

### Error: "Repository not found"
- Ensure the `jounaidayoub.github.io` repository exists
- Check that the repository name is spelled correctly in the workflow

### Authentication Issues with External Repository
- The workflow automatically removes GitHub Actions authentication headers that can interfere with external repository access
- This is handled by: `git config --unset-all http.https://github.com/.extraheader`

## Testing

To test the deployment:
1. Make any small change to the repository
2. Push to the `main` branch
3. Check the Actions tab for the workflow status
4. If successful, changes should appear at:
   - `https://jounaidayoub.github.io/ayooub.me` (this repo's GitHub Pages)
   - `https://jounaidayoub.github.io` (main portfolio site)