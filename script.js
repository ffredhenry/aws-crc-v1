// interactive job history
document.addEventListener('DOMContentLoaded', function()
{
	// array with employment history data
	const employmentHistory = [
		{
			id: 1, 
			title: "Network Security Engineer", 
			company: "AT&T Cybersecurity", 
			geolocation: "Austin, TX",
			years: "March 2023 - Present", 
			description: //using HTML/CSS elements directly within template literals to bypass styling
			`
			Provide security monitoring and incident handling for over 350 public and private-sector customers in a variety of industry verticals.<br>
			● Investigate alerts in customer Azure and AWS environments to discover potential security misconfigurations<br>
			● Monitor and take action on customer endpoints using SentinelOne EDR to proactively block and mitigate threats<br>
			● Identify excess false positive alerts and document for SOAR team to implement filtering rules in AlienVault SIEM<br>
			● Leverage sandboxed VMs and open-source intelligence tools to investigate URLs and files from phishing emails<br>
			● Analyze firewall logs from Cisco, Fortinet, and Palo Alto appliances to uncover C2 endpoint beaconing activity<br>
			● Produce and deliver reports to customers on compliance with NIST, ISO 27001, HIPAA and PCI DSS standards<br>
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
			QA specialist for Meta's products suites: Facebook (Social Impact), Data Engineering (daiquery, unidash, scuba), and Reality Labs (Oculus and Horizon Worlds).<br>
			● Resolved over 4000 incidents over the course of 2 years with a customer satisfaction rate exceeding 99%<br>
			● Performed static and dynamic analysis of backend SQL queries to troubleshoot data visualization dashboards<br>
			● Scheduled and led training sessions for six new employees over ten months on products, triage process and tools<br>
			● Collaborated with cross-functional teams to identify issues and potential resolutions in new software features<br>
			● Eliminated 1500 billable hours of developer time by performing software bisects to locate root causes of issues<br>
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
			Rotational program targeting Sales, Operations, and Supply Chain Management.<br>
			● Reduced processing time for external inventory data by 5 hours using Excel macros to format for upload to SAP<br>
			● Developed and revised new and existing training material for company SAP installation and custom transactions<br>
			● Removed 300 discontinued items from product catalog, reducing backlog on materials management by 40 hours<br>
			● Designed testing framework to evaluate accuracy of prototype material search tool against 3000 customer orders<br>
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
			Founding member of the Zachry Engineering IT Department<br>
			● Significantly reduced the occurrence of wireless microphone outages through implementing remote monitoring<br>
			● Trained 20 faculty members on usage of digital whiteboard technology and lecture recording in classrooms<br>
			● Created documentation for 70 new hires on setup of ServiceNow dashboard for incident monitoring and triage<br>
			● Regularly went the extra mile in resolving faculty and student IT issues by working outside of allotted time slots<br>
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
			Digital Transformation specialist<br>
			● Increased order throughput in warehouse with barcoding and ERP integration to allow real-time inventory control<br>
			● Transformed HR to paperless environment with web-based applicant tracking, payroll and vacation management<br>
			● Streamlined order fulfillment processes for a high-volume account by adding 400 new product lines in inventory<br>
			● Executed remarketing campaign for salvageable IT assets to fund e-waste recycling of deprecated infrastructure<br>
			`
		}
	];

	///// FIXME: Add a 'const' for Skills
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
