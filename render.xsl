<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Book List</title>
            </head>
            <body>
                <h2>All Books - Title and Author</h2>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                    <!-- Loop through all books -->
                    <xsl:for-each select="library/book">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="author"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Books in CSE Category</h2>
                <ul>
                <xsl:for-each select="library/book[@category='CSE']">// x path
                
                        <li><xsl:value-of select="title"/></li>
                    </xsl:for-each>
                </ul>


                 <h2>Books with price greater than 200</h2>
            <ul>
                <xsl:for-each select="library/book">
                <xsl:if test="price > 200">
                    <li><xsl:value-of select="title"/></li>
                </xsl:if>
                </xsl:for-each>
            </ul>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
