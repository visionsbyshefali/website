#Requires -Version 5.1
<#
  Netlify production deploy: runs local Netlify build pipeline then deploys.

  First-time setup:
    1) Netlify dashboard → User settings → Applications → Personal access tokens → New token
    2) PowerShell:  $env:NETLIFY_AUTH_TOKEN = "YOUR_TOKEN"
    3) In repo root (once):  npx --yes netlify-cli link
       (pick existing site or create new)

  Then run from repo root:
    .\scripts\deploy-netlify.ps1

  Or: npm run deploy:netlify
#>
$ErrorActionPreference = "Stop"
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $RepoRoot

if (-not $env:NETLIFY_AUTH_TOKEN -or $env:NETLIFY_AUTH_TOKEN.Trim().Length -eq 0) {
  Write-Host "Missing NETLIFY_AUTH_TOKEN." -ForegroundColor Red
  Write-Host "Create a token: Netlify → User settings → Applications → Personal access tokens" -ForegroundColor Yellow
  Write-Host "Then: `$env:NETLIFY_AUTH_TOKEN = '...'" -ForegroundColor Yellow
  exit 1
}

Write-Host "Netlify: build + production deploy from $RepoRoot" -ForegroundColor Cyan
npx --yes netlify-cli deploy --prod --build
