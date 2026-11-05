# Verification method & exclusions

## Scope

Research was conducted in **Chrome on November 5, 2026**. The focus is New York City and New Jersey, including jobs that explicitly offer a local office among multiple locations. This is a purposive sample across job families and career levels, not an exhaustive crawl or representative labor-market survey.

Searches covered FDE internships, new-grad agent engineering, AI security, New Jersey agent/infrastructure roles, IT automation, governance, and model operations. Search results supplied leads; employer career pages and employer-hosted ATS descriptions supplied the main evidence. AI search summaries and broad job-board counts were not treated as verified facts.

## What each record preserves

The [directory](/jobs) and [JSON dataset](/jobs.json) preserve the employer’s title, location, source URL, review date, responsibilities, qualifications, pay wording, timing, experience-bucket rationale, and verification status. Descriptions are paraphrased. The dataset is static and can become stale after review.

**Employer detail verified** means the job description was readable on the employer’s site or its ATS, a local location was stated, and an Apply control was visible. This does not prove that a recruiter is still accepting candidates, that every listed location has a seat, or that an application will be reviewed.

**Employer board + secondary detail** applies only to CoreWeave’s fleet role: the original board listed the exact requisition and Livingston location, but its detail page did not render. A mirror for the same requisition supplied the description. Its weaker status remains visible and can be filtered out.

## Experience buckets

- **Internship:** explicitly called an internship; degree eligibility is retained separately.
- **Entry-level:** explicitly new graduate, or clearly identified as an inferred early-career route. CoreWeave is the sole inference here: two years is preferred, not a minimum, in its mirrored description.
- **Mid-level:** this project’s bucket for the sampled roles requiring about three years without a senior title.
- **Experienced:** five-plus years required without explicit title seniority; the two Dentsu roles.
- **Senior / leadership:** explicit senior, staff, manager, director, or lead roles. This grouping does not imply all roles involve people management.
- **Employer title seniority:** a separate field records only the designation visible in the title. “Not explicit in title” does not mean junior.
- **Unspecified:** insufficient evidence for a level; used for Armory instead of guessing.

A qualification is not converted into a recommendation. Graduate-study requirements, prior internships, language requirements, office attendance, and eligibility restrictions are preserved where material. A preferred skill is not silently converted into a minimum.

## Geography and compensation

Only actual job locations count. A company headquarters, related-job sidebar, or state mentioned in pay disclosures is insufficient. Cloudflare’s pay text mentions NJ, but its office choices list NYC, Austin, and San Francisco; it counts only toward NY here.

We do not annualize hourly internship pay or divide annual-looking bands into expected internship earnings. Some employers omit the pay period, and that uncertainty stays visible. Posted compensation is not a market average, guaranteed offer, or BLS median.

## Excluded and uncertain leads

| Lead | Observation | Treatment |
| --- | --- | --- |
| [Baseten: IT Support / Operations Engineer (NY)](https://jobs.ashbyhq.com/baseten/4dcdf587-38f3-4363-8033-a453f54b38b0) | Header says NY/hybrid; body requires five days in San Francisco | Excluded from the local directory pending employer clarification |
| [JPMorganChase: AI Associate Engineer, requisition 210788723](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_2001/job/210788723/) | Employer page states job is no longer available | Excluded from current postings |
| [JPMorganChase: Java with Agentic AI, requisition 210803696](https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210803696) | Actual locations Chicago/Plano; search snippet included Jersey City from related jobs | Excluded; separately verified the genuine Jersey City requisition 210725876 |
| [Older CoreWeave Built In listing](https://www.builtinnyc.com/job/operations-engineer-fleet-reliability/4519747) | Explicit removal notice dated October 30, 2025 | Not used as an active posting |
| [Newer CoreWeave Built In listing](https://www.builtinnyc.com/job/operations-engineer-fleet-reliability/11822615) | Actual job location Plano despite company-office panels for NJ/NY | Not counted as local; exact Livingston requisition researched separately |

## BLS versus job postings

BLS forecasts broad national occupations. Employer postings establish concrete duties and hiring requirements at particular organizations. Neither a single posting nor this sample establishes a title’s growth rate. The [BLS discussion](/local-findings#what-bls-adds-and-cannot-add) also includes an occupation with a declining outlook to avoid implying that all AI-adjacent IT work is expanding.

## Rechecking this research

Reopen the exact source URL; verify the title, location, Apply control, and requirements; update the checked date and status. Mark closed roles rather than replacing their links with unrelated jobs. Record material changes and deduplicate by requisition. For growth research, repeat the same searches and criteria over time before comparing counts.
