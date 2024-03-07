// interactive job history
document.addEventListener('DOMContentLoaded', function()
{
	// array with employment history data
	const employmentHistory = [
		{
			id: 1, 
			title: "Security Analyst", 
			company: "AT&T Cybersecurity", 
			geolocation: "Austin, TX",
			years: "March 2023 - Present", 
			description: 
			`
			param_job_1
			`
		},
		{
			id: 2,
			title: "Software QA Test Engineer",
			company: "Meta Platforms (Contractor through Wipro LTD)",
			geolocation: "Austin, TX",
			years: "October 2020 - February 2023",
			description:
			`
			param_job_2
			`
		},
		{
			id: 3,
			title: "Rotational Supply Chain Analyst",
			company: "DistributionNOW",
			geolocation: "Multiple Locations (CONUS)",
			years: "June 2019 - April 2020",
			description:
			`
			param_job_3
			`
		},
		{
			id: 4,
			title: "IT Support Analyst",
			company: "Texas A&M College of Engineering",
			geolocation: "College Station, TX",
			years: "August 2018 - May 2019",
			description:
			`
			param_job_4
			`
		},
		{
			id: 5,
			title: "Supply Chain & Procurement Intern",
			company: "A&C Plastics, Inc.",
			geolocation: "Houston, TX",
			years: "May 2018 - August 2018",
			description:
			`
			param_job_5
			`
		}
	];

	// Technical Skills Drop-down
	const technicalSkills = [
		{
			id: 1,
			category: "Security Tools",
			skills: "Alienvault, SentinelOne, Splunk, Osquery, Security Onion, Wazuh, Wireshark, YARA"
		},
		{
			id: 3,
			category:"Systems",
			skills: "Amazon Web Services, Docker, Linux, Windows, MacOS"
		},
		{
			id: 3,
			category:"Programming Languages and Tools",
			skills: "Python, SQL, Bash, Javascript, CSS, HTML, Git/GitHub, AWS-CLI"
		}
	];
	
	
	// Timeline declaration and entries for employment history
	const exp_timeline = document.getElementById('exp_timeline');
	employmentHistory.forEach(job => {
		// container for each job entry
		const entry = document.createElement('div');
		entry.className = 'entry';
		entry.id = 'entry-' + job.id;

		// title header for each entry (on container)
		const header = document.createElement('div');
		header.className = 'entry-header';
		header.innerText = job.title;

		// Content section for entry (initially hidden)
		const content = document.createElement('div');
		content.className = 'entry-content';
		content.innerHTML = 
		`
		<strong>Organization:</strong> ${job.company}<br>
        <strong>Location:</strong> ${job.geolocation}<br>
		<strong>Tenure:</strong> ${job.years}<br>
        <p">${job.description}</p> 
		`; 
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown)
			{
                // Display toggle, shows if hidden and hides if showing
                content.style.display = 'block';
                entry.classList.add('active');
            } 
        });

        exp_timeline.appendChild(entry);
    });
	
	const skills_timeline = document.getElementById("skills_timeline"); 

	// FIXME: add an timeline entry for skills
	technicalSkills.forEach(skillCategory => {
		const entry = document.createElement('div');
		entry.className = 'entry';
		entry.id = 'entry-'+ skillCategory.id;
		
		const header = document.createElement('div');
		header.className = 'entry-header';
		header.innerText = skillCategory.category;
		
		const content = document.createElement('div');
		content.className = 'entry-content';
		content.innerHTML = skillCategory.skills;
		content.style.display = 'none';

		entry.appendChild(header);
		entry.appendChild(content);

		header.addEventListener('click', function () {
            const isContentShown = content.style.display === 'block';

            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none';
            });
            
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active');
            });

            if (!isContentShown)
			{
                content.style.display = 'block';
                entry.classList.add('active');
            }
		});

		skills_timeline.appendChild(entry);
	});
	

});
