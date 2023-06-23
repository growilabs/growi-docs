# Memory Auto Increase Feature

There was a case that GROWI App would restart due to insufficient memory when the following operations were performed on GROWI App.

- Rebuilding the full-text search index on the GROWI App that is creating a large number of pages
- Creation of data archives for the GROWI App that creates a large number of pages
- Increased requests to the GROWI App

When the above cases occur, this function automatically increases the amount of allocated memory beyond the amount of memory that is normally allocated.

## Applicable Plans

- Startup
- Plus
- Premium


## Behavior Until The Amount of Memory is Increased

In some cases, it may take 10 to 20 minutes to increase the amount of memory.
Therefore, even if the system restarts after the first operation, please wait for a while and then perform the same operation again.

Also, if the operation continues to fail after some time has elapsed, please wait for a while and then perform the same operation again.

## Automatic Memory Reduction after Increasing the Amount of Memory

Memory that has been automatically increased will be automatically reduced if it is determined that it is not needed continuously.
