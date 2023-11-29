# Fyle Frontend Challenge

This project helps retrieve public repositories for any GitHub user using the GitHub API.

## What is an Access Token?

An access token contains information about the user, permissions, groups, and timeframes. They are used in token-based authentication to allow an application to access an API.

## Challenge Outline

This challenge involves implementing an application using the GitHub API. The services you are using are free, and you can create a GitHub access token to authenticate the API and make several requests.

__Note__: Unauthenticated users can only make a few requests, and it's possible that the site will give no response. In that case, you can either wait for an hour or create a GitHub access token. Instructions for creating a GitHub access token are provided below.

## Deployed Site

You can access the deployed site [here](http://githubpublicrepo.s3-website.ap-south-1.amazonaws.com/).

## How to Create a GitHub Access Token

1. Login to your GitHub account.
2. Navigate to your profile pic/avatar and click on Settings.
3. Scroll down until you see Developer Settings on the left panel and click it.
4. In the Developer Settings, navigate to the Personal access tokens → Tokens (classic) → Generate New Token.
5. Now navigate to the Personal access tokens → Tokens (classic) → Generate New Token Dropdown → Generate New Token Classic.
6. Type a note explaining why you need this token, set an expiration date (recommended: 7 days), select public_repo under repo, and then click on Generate token.
7. A token will be generated at your end. You can copy this token and save it because you can only see it once. When the page refreshes, the token will be hidden.

__Note__: If you lose your token, you can delete your existing one and create a new.

## Installation

1. Fork this repository to your GitHub account.
2. Clone the forked repository and proceed with the following steps.

### Install Requirements
* Install Angular CLI. [Reference](https://angular.io/cli)
* Run `npm install` in this repository.

## Development Server

Run `ng serve` for a development server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further Help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.