# UserGroup Management

By using the UserGroup Management function, you can set the authority on a page basis that only specific users can view and edit the contents.

Only authorized users can set groups from the administration menu.

## Create group

1. Go to "UserGroup Management" in the administration menu.

<img :src="$withBase('/assets/images/en/group1.png')" alt="group1">

2. Click on the "Create new group" button.

<img :src="$withBase('/assets/images/en/group2.png')" alt="group2">

3. Fill in the "Group name" and "Description" and click the "Create" button.

<img :src="$withBase('/assets/images/en/group3.png')" alt="group3">

4. A notification appears in the upper left corner and the group is added to the list.

<img :src="$withBase('/assets/images/en/group4.png')" alt="group4">

## Adding users to groups

1. Select a group in the Group List.

<img :src="$withBase('/assets/images/en/group5.png')" alt="group5">

2. Click "+" in the User list.

<img :src="$withBase('/assets/images/en/group6.png')" alt="group6">

3. Click the "+" in the User list to display the entry field for adding users to the group.

<img :src="$withBase('/assets/images/en/group7.png')" alt="group7">

4. After entering the information and clicking "add," the user is added to the group.

<img :src="$withBase('/assets/images/en/group8.png')" alt="group8">

if the username has not been registered yet, an error will occur and the user cannot be added to the group.

## Set browsing permissions for pages

After the group is created, set the view / edit authority to the page.

1. In the page edit mode, set "Only inside the group" as shown in the image below.

<img :src="$withBase('/assets/images/en/group9.png')" alt="group9">

2. Then, the list of the groups you belong is displayed.

<img :src="$withBase('/assets/images/en/group10.png')" alt="group10">

3. Select the group and click the Update button.

<img :src="$withBase('/assets/images/en/group11.png')" alt="group11">

If you see the notation that "Browsing of this page is restricted", the authority setting is completed.

## Refer to the list of authorization pages on the group management page

If you set view / edit authority to a page, you can see a list of autholized pages on the UserGroup Management screen.

<img :src="$withBase('/assets/images/en/group12.png')" alt="group12">

## User Group Parent-Child Settings

It is possible to set a parent-child relationship between user groups.

For example, you can create a "Design Team" as a child group of the "Technical Department" group and register some members in the technical department group.

1. Select a group from the Group list.

<img :src="$withBase('/assets/images/en/group13.png')" alt="group13">

2. Click on "Add child group" framed in red.

<img :src="$withBase('/assets/images/en/group14.png')" alt="group14">

3. Select the group you wish to add (select "Create new group" if you wish to add a new one).

<img :src="$withBase('/assets/images/en/group15.png')" alt="group15">

4. Fill in the "Group name" and "Description" and click the "Create" button.

<img :src="$withBase('/assets/images/en/group16.png')" alt="group16">

5. After entering the information and clicking "create,"  the group is added to the user group.

<img :src="$withBase('/assets/images/en/group17.png')" alt="group17">