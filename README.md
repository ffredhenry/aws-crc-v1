# aws-crc-v1
AWS Cloud Resume Challenge v1

### Basics
**NOTICE:** As of 4/30/2024, this project is no longer live on AWS. Due to a recent disclosure of 
unintended billing behavior through the [S3 API](https://archive.is/z6hK1), I have deleted all my 
project resources for the time being. I will keep using AWS when I am actively working on a project.

This project is considered a "prelude" to the Cloud Resume Challenge, and is based on a FreeCodeCamp
[article](https://www.freecodecamp.org/news/aws-project-build-a-resume/). I took the source code and
customized it to suit my preferences, and then uploaded all files to an S3 bucket set up for static
website hosting. Next, I created a hosted zone with a domain external to Route 53 - this was a bit 
tricky since my hosting provider has multiple places to change NS records. Once that was done, using
ACM and CloudFront to create a distribution and adding it to my hosted zone was a straightforward process.

**Technology "Stack"**
- HTML/CSS/Javascript (Website components)
- Amazon S3 (Static Website)
- Amazon Route 53 (Hosted Zone)
- Amazon Certificate Manager
- Amazon CloudFront (CDN distribution)

### Future Plans
For V2, I would like to incorporate multiple S3 buckets with a Lambda function adding in PII (emails, links)
as well as using services to make it compliant with the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/).
