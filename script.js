const knowledgeBase = [
    { 
        // Article: How to Reset a Password in Active Directory
        title: "How to Reset a Password in Active Directory",
        content: "To reset a password in Active Directory, follow these steps:<br><br>1. Log in to a domain controller or a computer with Active Directory administrative tools installed.<br><br>2. Open the Active Directory Users and Computers (ADUC) console.<br><br>3. Navigate to the user's account by browsing through the Organizational Unit (OU) or by using the search feature.<br><br>4. Right-click on the user's account and select 'Reset Password'.<br><br>5. Follow the prompts to enter and confirm the new password.<br><br>6. Click 'OK' to reset the password.<br><br>7. Inform the user of their new password and any additional instructions if necessary."
    },
    {
        // Article: How to Onboard Users
        title: "How to Onboard Users",
        content: "Onboarding users involves several steps to ensure they have access to the necessary resources and information. Here's a general guide:<br><br>1. Collect necessary information: Gather details such as the user's name, role, department, email address, phone number, and any specific access requirements.<br><br>2. Create user accounts: Use the appropriate tools, such as Active Directory or a user management system, to create user accounts with the required permissions.<br><br>3. Set up email and communication tools: Configure email accounts and provide access to collaboration tools like Slack or Microsoft Teams.<br><br>4. Provision access to resources: Grant access to network drives, software applications, and other resources based on the user's role and requirements.<br><br>5. Provide training and documentation: Offer training sessions or provide documentation to help users understand company policies, procedures, and tools.<br><br>6. Follow up: Check in with new users to ensure they have everything they need and address any issues or questions they may have."
    },
    {
        // Article: How to Troubleshoot Connectivity Issues
        title: "How to Troubleshoot Connectivity Issues",
        content: "Troubleshooting connectivity issues requires a systematic approach to identify and resolve problems. Here's a step-by-step guide:<br><br>1. Identify the problem: Gather information from the user to understand the nature of the connectivity issue. Determine if it's related to network access, internet connectivity, or specific applications.<br><br>2. Check physical connections: Ensure that cables, routers, switches, and other networking equipment are properly connected and functioning.<br><br>3. Verify network settings: Check IP configurations, DNS settings, and network protocols to ensure they are configured correctly.<br><br>4. Test connectivity: Use diagnostic tools like ping, traceroute, or network monitoring software to test connectivity to servers, websites, or other devices.<br><br>5. Check for software issues: Verify that firewalls, antivirus software, or other security measures are not blocking network access.<br><br>6. Update drivers and firmware: Ensure that network adapters, routers, and other devices have the latest drivers and firmware updates installed.<br><br>7. Escalate if necessary: If the issue persists or requires advanced troubleshooting, escalate the problem to a higher-level support team or network administrator."
    },
    {
        // Article: How to Set Up Active Directory
        title: "How to Set Up Active Directory",
        content: "Setting up Active Directory involves several steps to create a domain controller and configure the domain environment. Here's a basic guide:<br><br>1. Install Windows Server: Begin by installing Windows Server on a dedicated machine that will act as the domain controller.<br><br>2. Promote the server to a domain controller: Use the 'Active Directory Domain Services Installation Wizard' to promote the server to a domain controller.<br><br>3. Create a new forest or domain: Specify whether you're creating a new forest or adding a new domain to an existing forest.<br><br>4. Configure DNS: If DNS is not already installed, the wizard will prompt you to install and configure it. Ensure that DNS settings are correctly configured for the domain.<br><br>5. Specify the domain and forest functional levels: Choose the appropriate functional levels based on the operating systems used in your environment.<br><br>6. Set the Directory Services Restore Mode password: Provide a password for Directory Services Restore Mode, which is used to perform Active Directory recovery operations.<br><br>7. Review and confirm settings: Review the summary of settings and confirm to begin the Active Directory installation.<br><br>8. Complete the installation: Once the installation is complete, the server will restart, and Active Directory services will be available for configuration and management."
    },
    {
        // Article: How to Configure DNS
        title: "How to Configure DNS",
        content: "DNS (Domain Name System) configuration is crucial for network connectivity and resolving domain names to IP addresses. Here are the steps to configure DNS:<br><br>1. Open the DNS Manager: Launch the DNS Manager console on the DNS server by searching for 'DNS' in the Start menu.<br><br>2. Create Forward Lookup Zone: Right-click on 'Forward Lookup Zones' and select 'New Zone'. Follow the wizard to create a new primary zone for the domain.<br><br>3. Configure Zone Settings: Specify the zone type (primary, secondary, or stub), replication scope, and dynamic updates settings as per your network requirements.<br><br>4. Add DNS Records: Create necessary DNS records such as A records (host records), CNAME records (alias records), MX records (mail exchange records), etc., to map domain names to IP addresses.<br><br>5. Configure Reverse Lookup Zone (Optional): If required, create a reverse lookup zone to resolve IP addresses to domain names.<br><br>6. Verify DNS Configuration: Use tools like nslookup or ping to verify DNS resolution and ensure that DNS queries are resolving correctly.<br><br>7. Monitor DNS Health: Regularly monitor DNS server logs and perform routine maintenance tasks such as purging stale records, updating zone data, and monitoring DNS replication to maintain DNS health and performance."
    },
    {
        // Article: How to Configure DHCP
        title: "How to Configure DHCP",
        content: "Configuring DHCP (Dynamic Host Configuration Protocol) simplifies the process of assigning IP addresses to devices on a network. Here's how to configure DHCP:<br><br>1. Open DHCP Manager: Launch the DHCP Manager console on the DHCP server by searching for 'DHCP' in the Start menu.<br><br>2. Create a New DHCP Scope: Right-click on 'IPv4' and select 'New Scope'. Follow the wizard to define the scope, including the range of IP addresses, subnet mask, default gateway, and DNS server addresses.<br><br>3. Configure Scope Options: Specify additional options such as lease duration, DNS servers, WINS servers, and domain name.<br><br>4. Authorize DHCP Server (If Needed): If the DHCP server is not yet authorized in Active Directory, right-click on the server name and select 'Authorize'.<br><br>5. Activate the Scope: Right-click on the newly created scope and select 'Activate' to make it available for assigning IP addresses.<br><br>6. Monitor DHCP Activity: Regularly monitor DHCP server logs and lease information to ensure proper allocation of IP addresses and troubleshoot any issues that may arise."
    },
    {
        // Article: How to Install and Update Antivirus Software
        title: "How to Install and Update Antivirus Software",
        content: "Protecting your computer from malware and viruses is essential for maintaining cybersecurity. Follow these steps to install and update antivirus software:<br><br>1. Choose a reputable antivirus program: Research and select a reliable antivirus software that offers real-time protection, regular updates, and advanced malware detection capabilities.<br><br>2. Download the antivirus software: Visit the official website of the chosen antivirus vendor and download the installation package for your operating system (Windows, macOS, or Linux).<br><br>3. Install the antivirus software: Double-click on the downloaded installation file and follow the on-screen instructions to install the antivirus software on your computer.<br><br>4. Activate the antivirus software: Enter the product key or activation code provided with the software to activate the antivirus program and unlock its full features.<br><br>5. Perform initial scan: Run a full system scan to detect and remove any existing malware or viruses from your computer.<br><br>6. Configure automatic updates: Enable automatic updates for the antivirus software to ensure that it stays up-to-date with the latest virus definitions and security patches.<br><br>7. Regularly scan your computer: Schedule periodic scans to check for malware infections and maintain the security of your system.<br><br>8. Stay vigilant: Practice safe browsing habits, avoid clicking on suspicious links or downloading files from unknown sources, and be cautious when opening email attachments to prevent malware infections."
    },
    {
        // Article: Common Network Connectivity Issues and Solutions
        title: "Common Network Connectivity Issues and Solutions",
        content: "Network connectivity issues can disrupt productivity and hinder communication within an organization. Here are some common network connectivity problems and their solutions:<br><br>1. Slow internet connection: Check the speed of your internet connection using online speed testing tools. If the speed is significantly lower than expected, contact your internet service provider (ISP) to troubleshoot the issue.<br><br>2. Intermittent connection drops: Identify potential sources of interference such as nearby electronic devices, wireless signals, or physical obstructions. Move wireless routers to a central location and ensure they are not obstructed by walls or furniture.<br><br>3. DNS resolution failures: Verify DNS settings on your computer or network devices and ensure they are configured correctly. Try using alternative DNS servers such as Google DNS (8.8.8.8 and 8.8.4.4) to resolve DNS issues.<br><br>4. IP address conflicts: Check for duplicate IP addresses on your network and resolve conflicts by assigning unique IP addresses to devices or configuring DHCP to automatically assign IP addresses.<br><br>5. Firewall or security software blocking connections: Review firewall settings and security software configurations to ensure they are not blocking legitimate network traffic. Whitelist trusted applications and websites if necessary.<br><br>6. Wired or wireless network adapter issues: Update network adapter drivers to the latest version, disable and re-enable network adapters, or try using a different network adapter to troubleshoot connectivity problems.<br><br>7. Router or modem issues: Power cycle routers and modems by unplugging them from power, waiting for a few minutes, and then plugging them back in. Reset routers to factory defaults if necessary, but proceed with caution as this will erase all custom settings.<br><br>8. Network congestion or bandwidth limitations: Monitor network traffic and usage patterns to identify congestion points or bandwidth bottlenecks. Consider upgrading network infrastructure or implementing Quality of Service (QoS) policies to prioritize critical traffic."
    },
    {
        // Article: How to Troubleshoot Printer Issues
        title: "How to Troubleshoot Printer Issues",
        content: "Printers are essential devices in most office environments, but they can encounter various issues that disrupt printing operations. Here's how to troubleshoot common printer problems:<br><br>1. Check printer connections: Ensure that the printer is properly connected to the computer or network. Verify cable connections for wired printers and wireless network settings for wireless printers.<br><br>2. Restart printer and computer: Power off the printer, wait for a few seconds, and then power it back on. Restart the computer as well to refresh printer connections and settings.<br><br>3. Clear print queue: Open the print queue on your computer and cancel any pending print jobs. Stalled print jobs can cause printer errors and prevent new print jobs from being processed.<br><br>4. Update printer drivers: Download and install the latest printer drivers from the manufacturer's website. Outdated or incompatible drivers can cause printing issues.<br><br>5. Check printer status lights: Refer to the printer's user manual or control panel for information on status lights and error codes. Troubleshoot hardware or connectivity problems based on the observed status indicators.<br><br>6. Run printer diagnostics: Most printers come with built-in diagnostic tools or troubleshooting utilities that can help identify and resolve common issues. Refer to the printer documentation for instructions on running diagnostics.<br><br>7. Clean or replace printer components: If print quality is poor or if the printer is producing smudged or faded output, clean the printhead, rollers, or other printer components as per the manufacturer's recommendations. Replace consumable parts such as ink cartridges or toner cartridges if necessary.<br><br>8. Contact technical support: If troubleshooting steps fail to resolve printer issues, contact the printer manufacturer's technical support for assistance. Provide details about the problem, printer model, and any error messages received for faster resolution."
    }
    
];

// Function to perform search
function search() {
    // Get the search input value and convert it to lowercase
    const searchInput = document.getElementById('search-box').value.toLowerCase();
    
    // Get the results section element
    const resultsSection = document.getElementById('results');
    
    // Clear previous search results
    resultsSection.innerHTML = '';

    // Loop through each item in the knowledge base
    knowledgeBase.forEach(item => {
        // Check if the search input is found in the title or content of the item
        if (item.title.toLowerCase().includes(searchInput) || item.content.toLowerCase().includes(searchInput)) {
            // If the search input is found, create a new article element
            const article = document.createElement('article');
            // Set the inner HTML of the article element with the title and content of the item
            article.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
            // Append the article element to the results section
            resultsSection.appendChild(article);
        }
    });

    // If no search results are found, display a message
    if (resultsSection.innerHTML === '') {
        resultsSection.innerHTML = '<p>No results found.</p>';
    }
}

