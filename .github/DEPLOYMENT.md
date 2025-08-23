# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to `jounaidayoub.github.io` using GitHub Actions.

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
3. Name: `PAT_TOKEN`
4. Value: Paste the PAT you generated
5. Click "Add secret"

## How the Deployment Works

1. **Trigger**: Workflow runs on every push to the `main` branch
2. **Build**: The application is built using `npm run build`
3. **Deploy**: The built files from `dist/` are pushed to the `jounaidayoub.github.io` repository
4. **Result**: The portfolio is available at `https://jounaidayoub.github.io`

## Troubleshooting

### Error: "PAT_TOKEN secret is not set"
- Make sure you've added the `PAT_TOKEN` secret as described above
- Verify the secret name is exactly `PAT_TOKEN`

### Error: "Permission denied"
- Check that your PAT has `repo` scope permissions
- Verify that the PAT hasn't expired
- Make sure the PAT was created by a user with write access to `jounaidayoub.github.io`

### Error: "Repository not found"
- Ensure the `jounaidayoub.github.io` repository exists
- Check that the repository name is spelled correctly in the workflow

## Testing

To test the deployment:
1. Make any small change to the repository
2. Push to the `main` branch
3. Check the Actions tab for the workflow status
4. If successful, changes should appear at `https://jounaidayoub.github.io`